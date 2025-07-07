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
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="Profile"
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
