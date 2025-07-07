import React from "react";
import styles from "../styles/Latest.module.css";

function Latest() {
  return (
    <div className={styles.container}>
      <div className={styles.latest}>
        <h1 className={styles.heading}>Latest</h1>

        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="Sleek sports car"
        />

        <p className={styles.meta}>
          By <span className={styles.name}>Mark Stevens</span> | July 1, 2025
        </p>

        <h2 className={styles.subheading}>
          The Future of Electric Vehicles: What to Expect in 2025
        </h2>

        <p className={styles.paragraph}>
          Electric vehicles (EVs) are rapidly reshaping the automotive industry.
          With advances in battery technology, longer ranges, and more
          affordable models hitting the market, 2025 is set to be a pivotal year
          for EV adoption. Discover the latest innovations and how they are
          driving a cleaner, greener future.
        </p>

        <button className={styles.button}>Read More</button>
      </div>

      {/* trending */}

      <div className={styles.trending}>
        <h1 className={styles.heading2}>Trending Blogs    <a href="/blogs" className={styles.seeMore}>
          See more
        </a></h1>
      

        <div className={styles.info}>
          <p className={styles.meta}>
            By <span className={styles.name}>Lisa Brown</span> | June 28, 2025
          </p>
          <h2 className={styles.subheading}>
            Top 10 Muscle Cars to Watch Out for in 2025: A blend of classic
            power and modern tech that thrills enthusiasts and collectors alike.
          </h2>
        </div>

        {/* highlight */}

        <div className={`${styles.infoh}`}>
          <p className={styles.metah}>
            By <span className={styles.nameh}>James Carter</span> | June 30,
            2025
          </p>
          <h2 className={styles.subheadingh}>
            How Autonomous Driving is Changing the Way We Commute: Exploring
            safety improvements and the future of driverless technology in
            everyday life.
          </h2>
        </div>

        <div className={styles.info}>
          <p className={styles.meta}>
            By <span className={styles.name}>Samantha Green</span> | June 25,
            2025
          </p>
          <h2 className={styles.subheading}>
            Essential Tips for Maintaining Your Classic Car: From preservation
            to restoration, keep your vintage vehicle in pristine condition for
            years to come.
          </h2>
        </div>

        <div className={styles.info}>
          <p className={styles.meta}>
            By <span className={styles.name}>Robert Wilson</span> | June 27,
            2025
          </p>
          <h2 className={styles.subheading}>
            The Rise of Hybrid SUVs: Balancing Power and Efficiency for Today
            Driver While Reducing Environmental Impact.
          </h2>
        </div>

       
      </div>
    </div>
  );
}

export default Latest;
