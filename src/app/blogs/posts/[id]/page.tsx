"use client";

import React , {useState,useEffect,Suspense} from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
// import Category from "@/app/components/Category";
// import CarSpecs from "@/app/components/CarSpecs";
import { getPostById, getUserById } from "./../../../../api/api";
import type { Post, User } from "../../../../types/types";
const CarSpecs = React.lazy(() => import("@/app/components/CarSpecs"));
const Category = React.lazy(() => import("@/app/components/Category"));


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

        <Suspense fallback={<p>Loading car specs...</p>}>
          <CarSpecs />
        </Suspense>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
 <Suspense fallback={<p>Loading categories...</p>}>
        <Category />
      </Suspense>    </>
  );
};

export default PostDetailPage;

// import { getPostById, getUserById, getAllPostsWithUsers } from "@/api/api";
// import styles from "./page.module.css";
// import Link from "next/link";
// import Category from "@/app/components/Category";
// import CarSpecs from "@/app/components/CarSpecs";
// import { notFound } from "next/navigation";

// type Props = {
//   params: { id: string };
// };

// export async function generateStaticParams() {
//   const posts = await getAllPostsWithUsers();

//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

// export default async function PostDetailPage({ params }: Props) {
//   const { id } = params;

//   const post = await getPostById(id);
//   if (!post) return notFound();

//   const user = await getUserById(post.userId);
//   if (!user) return notFound();

//   return (
//     <>
//       <div className={styles.container}>
//         <img
//           className={styles.imgg}
//           src="https://cdn.pixabay.com/photo/2022/11/04/13/43/car-7569896_960_720.jpg"
//           alt="Car"
//         />
//         <h1 className={styles.title}>{post.title}</h1>
//         <p className={styles.author}>
//           By <strong>{user.name}</strong> ({user.website})
//         </p>
//         <p className={styles.body}>{post.body}</p>

//         <CarSpecs />
//         <Link href="/" className={styles.backLink}>
//           ← Back to Home
//         </Link>
//       </div>
//       <Category />
//     </>
//   );
// }
