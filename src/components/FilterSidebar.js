import { categories } from "@/data/products";
import useFilterStore from "@/store/filterStore";
import { useEffect, useState } from "react";

const FilterSidebar = () => {
  const { category, priceRange, setCategory, setPriceRange, clearFilters } =
    useFilterStore();

  const [sliderValue, setSliderValue] = useState(
    priceRange.max === Infinity ? 1000 : priceRange.max
  );

  useEffect(() => {
    setSliderValue(priceRange.max === Infinity ? 1000 : priceRange.max);
  }, [priceRange]);

  const handleSliderChange = (e) => {
    const newMax = parseFloat(e.target.value);
    setSliderValue(newMax);
    setPriceRange(0, newMax);
  };

  return (
    <div className="bg-[#0758A8] rounded-lg shadow p-6 text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                checked={!category}
                onChange={() => setCategory("")}
                className="form-radio text-white bg-[#0758A8] border-blue-500 focus:ring-blue-400"
              />
              <span>All</span>
            </label>
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="form-radio text-white bg-[#0758A8] border-blue-500 focus:ring-blue-400"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${priceRange.min}</span>
            <span>
              ${priceRange.max === Infinity ? "1000+" : priceRange.max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
