"use client";
import React, { useState } from "react";
import styles from "./NewsletterBox.module.css";
import toast from "react-hot-toast";
import { postNewsLetter } from "@/utils/newsLetter";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    if (!email) {
      return toast.error("please write your email", { id: 1 });
    }
    console.log(email);
    const Email = { email };
    const { data, error } = await postNewsLetter(Email);

    if (data) {
      toast.success("Thanks for subscribe", { id: 2 });
      setEmail("");
    } else if (error) {
      toast.error("Error happen");
    }
  };

  return (
    <div className={styles.newsletterBox}>
      <div className={styles.top}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with our latest news and promotions.</p>
      </div>
      <form className={styles.form}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Your email address"
        />
        <button type="button" onClick={handleSubmit}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
