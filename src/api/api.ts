import axios from "axios";
import type { Post, User, CardDetail } from "../types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};

export const getUserById = async (userId: number) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
};


export const getAllPostsWithUsers = async (): Promise<CardDetail[]> => {
  const [postRes, userRes] = await Promise.all([
    axios.get<Post[]>(`${BASE_URL}/posts`),
    axios.get<User[]>(`${BASE_URL}/users`),
  ]);

  const posts = postRes.data;
  const users = userRes.data;

  //Record ek utility type h which is used to 
  // shape an object with specific key and value pair

  const userMap: Record<number, { username: string; website: string }> = {};
  users.forEach((user) => {
    userMap[user.id] = {
      username: user.username,
      website: user.website,
    };
  });

  const cards: CardDetail[] = posts.map((post) => {
    const user = userMap[post.userId];
    return {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmDBXuOrWKRZ5Ak4rPI6kmBDPg3OlNkkXOg&s",
      title: post.title,
      desc: post.body,
      username: user?.username || "Unknown",
      website: user?.website || "example.com",
    };
  });

  return cards;
};