import { create } from "zustand";

const useFilterStore = create((set) => ({
  category: "",
  priceRange: { min: 0, max: Infinity },
  searchQuery: "",

  setCategory: (category) => set({ category }),
  setPriceRange: (min, max) => set({ priceRange: { min, max } }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearFilters: () =>
    set({
      category: "",
      priceRange: { min: 0, max: Infinity },
      searchQuery: "",
    }),
}));

export default useFilterStore;
