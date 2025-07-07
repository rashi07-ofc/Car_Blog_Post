import React from "react";
import styles from "../styles/CarSpecs.module.css";

function CarSpecs() {
  return (
    <div>
      <div className={styles.specs}>
        <h3>Car Specs</h3>
        <ul>
          <li>Model Year: 2025</li>
          <li>Fuel Type: Electric</li>
          <li>Top Speed: 220 km/h</li>
          <li>Price: $45,000</li>
        </ul>
      </div>

      <div className={styles.rating}>
        <h3>User Rating</h3>
        <p><strong>4.0 / 5</strong></p>
        <p>Based on 128 reviews</p>
      </div>
    </div>
  );
}

export default CarSpecs;
