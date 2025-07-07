import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>

      <div className={styles.subscribeSection}>
        <p className={styles.subscribeText}>
          Subscribe to our newsletter to <br />get latest updates and news
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