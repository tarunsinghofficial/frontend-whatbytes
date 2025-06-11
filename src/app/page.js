"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products } from "@/data/products";
import useFilterStore from "@/store/filterStore";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    category,
    priceRange,
    searchQuery,
    setCategory,
    setPriceRange,
    setSearchQuery,
  } = useFilterStore();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const priceParam = searchParams.get("price");
    const searchParam = searchParams.get("search");

    if (categoryParam) setCategory(categoryParam);
    if (priceParam) {
      const [min, max] = priceParam.split("-").map(Number);
      setPriceRange(min, max);
    }
    if (searchParam) setSearchQuery(searchParam);
  }, [searchParams, setCategory, setPriceRange, setSearchQuery]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (priceRange.min !== 0 || priceRange.max !== Infinity) {
      params.set("price", `${priceRange.min}-${priceRange.max}`);
    }
    if (searchQuery) params.set("search", searchQuery);

    const newUrl = params.toString() ? `?${params.toString()}` : "/";
    router.push(newUrl);
  }, [category, priceRange, searchQuery, router]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Our Products
            </h1>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h2>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 WhatBytes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
