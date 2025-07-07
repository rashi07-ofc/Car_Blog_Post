"use client";

import Cover from "./components/Cover";
import Latest from "./components/Latest";
import CarPostCardList from "./components/CarPostCard";
import Category from "./components/Category";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Cover />
      <Latest />
      <CarPostCardList />
      <Category />
      <Testimonials />
      <CarPostCardList />
    </div>
  );
}
