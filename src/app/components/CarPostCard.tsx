import React, { useEffect, useState } from "react";
import styles from "../styles/CarPostCard.module.css";
import Link from "next/link";
import type { CardDetail } from "../../types/types";
import { getAllPostsWithUsers } from "../../api/api";
import Loader from "./Loader";

function CarPostCard({ imgUrl, title, username, website }: CardDetail) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img}>
        <img src={imgUrl} alt="Post Cover" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.authorDetails}>
        <img
          className={styles.profileImg}
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="Profile"
        />
        <div className={styles.metaContainer}>
          <div className={styles.name}>{username}</div>
          <div className={styles.meta}>
            <span>{website}</span>
            <span> July 2, 2025</span>
            <span> 3 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CarPostCardList() {
  const [cards, setCards] = useState<CardDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = (await getAllPostsWithUsers()).slice(0, 4);
        setCards(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0", color: "red" }}>
        {error}
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        No posts available.
      </div>
    );
  }

  return (
    <>
      <div className={styles.head}>
        <h2 className={styles.heading}>New Technology</h2>
        <Link href="/blogs" className={styles.link}>
          see more
        </Link>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((item, idx) => (
          <CarPostCard
           id={item.id}
            key={idx}
            imgUrl={item.imgUrl}
            title={item.title}
            desc={item.desc}
            category={item.category}
            username={item.username}
            website={item.website}
          />
        ))}
      </div>
    </>
  );
}
