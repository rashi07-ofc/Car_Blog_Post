"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import Category from "@/app/components/Category";
import CarSpecs from "@/app/components/CarSpecs";
import { getPostById, getUserById } from "./../../../../api/api";
import type { Post, User } from "../../../../types/types";

const PostDetailPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  if (!id || Array.isArray(id)) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const postData = await getPostById(id);
        setPost(postData);

        const userData = await getUserById(postData.userId);
        setUser(userData);
      } catch (err) {
        setError("Unable to fetch post details.");
        console.error("Error fetching post detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading post details...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!post || !user) return <p>No post found.</p>;

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.imgg}
          src="https://cdn.pixabay.com/photo/2022/11/04/13/43/car-7569896_960_720.jpg"
          alt="Car"
        />
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.author}>
          By <strong>{user.name}</strong> ({user.website})
        </p>
        <p className={styles.body}>{post.body}</p>

        <CarSpecs />
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
      <Category />
    </>
  );
};

export default PostDetailPage;
