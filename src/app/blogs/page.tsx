"use client";

import React, { useEffect, useState } from "react";
import Cover from "../components/Cover";
import Link from "next/link";
import styles from "./page.module.css";
import { useRef } from "react";
import { getAllPostsWithUsers } from "../../api/api";
import type { CardDetail } from "../../types/types";

const PAGE_SIZE = 10;

function Page() {
  const [allCards, setAllCards] = useState<CardDetail[]>([]);
  const [cards, setCards] = useState<CardDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "SUV", "EV", "Luxury", "Sedan"];
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const cardData = await getAllPostsWithUsers();
        setAllCards(cardData);
        setCards(cardData.slice(0, PAGE_SIZE));
      } catch (err) {
        console.log(err);
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setCards(allCards.slice(start, end));
  }, [currentPage, allCards]);

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(allCards.length / PAGE_SIZE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Cover />
      <div className={styles.conatiner} ref={containerRef}>
        <div className={styles.heading}>All Posts</div>

        <input
          type="text"
          placeholder="Search titles in current page..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        {loading && <p>Loading car blogs...</p>}

        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && filteredCards.length === 0 && (
          <p>No matching blogs on this page.</p>
        )}

        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.categoryButton} ${
                selectedCategory === cat ? styles.activeCategory : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {!loading &&
          !error &&
          filteredCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.left}>
                <img
                  src={card.imgUrl}
                  alt={`Image for ${card.title}`}
                  width={200}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.right}>
                <div className={styles.title}>{card.title}</div>
                <div className={styles.about}>
                  <img
                    className={styles.proimg}
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                  <span>
                    {`By ${card.username}`} — {card.website}
                    <br />
                    Nov 18, 2078 - 7min Read
                  </span>
                </div>
                <div className={styles.categoryTag}>{card.category}</div>

                <div className={styles.desc}>{card.desc}</div>

                <Link
                  href={`/blogs/posts/${
                    (currentPage - 1) * PAGE_SIZE + index + 1
                  }`}
                  className={styles.btnRead}
                >
                  <button>Read Full Article...</button>
                </Link>
              </div>
            </div>
          ))}

        {!loading && !error && allCards.length > 0 && (
          <div className={styles.paginationContainer}>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Previous
            </button>

            <span className={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
