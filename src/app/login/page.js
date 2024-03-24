"use client";
import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      const token = generateToken(32); // Generate token
      const expiration = new Date(); // Set expiration to one day from now
      expiration.setDate(expiration.getDate() + 1);

      // Use localStorage conditionally
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expiration.getTime());
      }

      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
