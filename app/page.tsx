"use client";
import HeroSection from "@/section/home/hero";
import ProductsSection from "@/section/home/products";

export default function Home() {
  return (
    <div className="text-gray-900">
      {/* Your home page content goes here */}
      <HeroSection />
      {/* Products Section */}
      <ProductsSection />
    </div>
  );
}
