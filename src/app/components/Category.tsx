import React from 'react';
import styles from '../styles/Category.module.css';
import { categoryData } from "../../data/categoryData";

function Category() {
  return (
    <>
      <div className={styles.head}>
        <h2 className={styles.heading}>Category</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {categoryData.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                src="https://images8.alphacoders.com/568/thumb-1920-568490.jpg"
                alt="Category"
              />
              <div className={styles.category}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
