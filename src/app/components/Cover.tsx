import React from "react";
import styles from "../styles\/Cover.module.css"
function Cover() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          Your Journey <br />
          Your Car <br />
          Your Way <br />
        </div>
        <div className={styles.content}>
          Welcome to your ultimate pit stop for everything automotive. Dive deep into the world of cars with in-depth reviews, explore the latest news, and gain expert insights that drive the industry forward. Whether you are a casual driver or a dedicated enthusiast, this is where your passion for cars accelerates.
        </div>
        <button className={styles.btnSub}>Subscribe</button>
      </div>
    </>
  );
}

export default Cover;
