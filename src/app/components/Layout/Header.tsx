"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/Header.module.css";

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navCont}>
        <div className={styles.navLeft}>
          <img
            src="https://image.made-in-china.com/202f0j00yFmaGSnzLEkc/White-Acrylic-Crystal-LED-Light-Car-Logo-Sign.webp"
            alt="logoo"
          />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>

        <div className={`${styles.navRight} ${menuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/"
                className={`${styles.link} ${
                  pathname === "/" ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${styles.link} ${
                  pathname === "/blogs" ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${styles.link} ${
                  pathname === "/about" ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${styles.link} ${
                  pathname === "/contact" ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Header;
