import styles from "../../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>

      <div className={styles.subscribeSection}>
        <p className={styles.subscribeText}>
          Subscribe to our newsletter to <br />
          get latest updates and news
        </p>
        <form className={styles.form}>
          <input type="email" placeholder="example@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.contactInfo}>
          <p>Finstreet 118 2561 abctown</p>
          <p>example@email.com 001 21345 442</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
