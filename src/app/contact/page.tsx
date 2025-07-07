"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./page.module.css";
import { toast, ToastContainer } from "react-toastify";
import type { FormData } from "@/types/types";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Submitted Data:", data);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      reset();
    }, 3000);
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.contactContainer}>
        <ToastContainer position="top-right" />
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.description}>
          Have questions or want to contribute to our car blog? Send us a
          message!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <label className={styles.formLabel}>
            Name
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={styles.input}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </label>

          <label className={styles.formLabel}>
            Email
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={styles.input}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </label>

          <label className={styles.formLabel}>
            Subject
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className={styles.input}
            />
            {errors.subject && (
              <span className={styles.error}>{errors.subject.message}</span>
            )}
          </label>

          <label className={styles.formLabel}>
            Message
            <textarea
              rows={5}
              {...register("message", { required: "Message is required" })}
              className={styles.textarea}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}
          </label>

          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
