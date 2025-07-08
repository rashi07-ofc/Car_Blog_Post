import React from "react";
import styles from "./page.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.boddy}>
      <div className={styles.aboutContainer}>
        <h1>About AutoRev Blog</h1>

        <p className={styles.intro}>
          Welcome to <strong>AutoRev Blog</strong> - your one-stop destination
          for automotive insights, reviews, and tips.
        </p>

        <section className={styles.section}>
          <h2>Why This Blog Exists</h2>
          <p>
            AutoRev Blog was created out of a shared passion for cars and a
            desire to help others navigate the fast-evolving world of
            automobiles. Whether you are a seasoned gearhead or a curious
            newcomer, our mission is to make car knowledge accessible, engaging,
            and trustworthy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What We Cover</h2>
          <p>Our articles span a wide range of topics including:</p>
          <ul className={styles.list}>
            <li>
              Electric Vehicles (EVs) - news, comparisons, and ownership tips
            </li>
            <li>SUV Reviews - hands-on analysis and buying advice</li>
            <li>
              Maintenance Tips - keep your car in top shape with expert guidance
            </li>
            <li>Performance Upgrades & Mods</li>
            <li>Industry News & Trends</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Tech Stack</h2>
          <p>
            This blog is built using modern web technologies for performance and
            maintainability:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Next.js</strong> - React-based framework for server-side
              rendering
            </li>
            <li>
              <strong>TypeScript</strong> - for safer, scalable code
            </li>
            <li>
              <strong>CSS Modules</strong> - for scoped and maintainable styles
            </li>
            <li>
              <strong>React Hook Form</strong> - for efficient form handling
            </li>
            <li>
              <strong>Toastify</strong> - for user-friendly notifications
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Get in Touch</h2>
          <p>
            Interested in contributing or partnering with us? Head over to our{" "}
            <a href="/contact" className={styles.link}>
              Contact
            </a>{" "}
            page — we would love to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
