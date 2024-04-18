"use client";
import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Axios from "@/utils/Axios";
function generateToken(length) {
  let token = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return token;
}
const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError("please write your email and password ");
    }

    try {
      const { data } = await Axios.post("/user/login-user", {
        email,
        password,
      });

      if (data?.status === "ok") {
        const token = data.accessToken; // Generate token
        const expiration = new Date(); // Set expiration to one day from now
        expiration.setDate(expiration.getDate() + 1);
        if (typeof window !== "undefined") {
          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiration", expiration.getTime());
          setError("");
          router.push("/admin");
        }
      } else {
        return toast.error(data?.status ?? "Error");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message ?? "Error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
