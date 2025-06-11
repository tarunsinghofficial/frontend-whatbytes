import { categories } from "@/data/products";
import useFilterStore from "@/store/filterStore";

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "Over $500", min: 500, max: Infinity },
];

const FilterSidebar = () => {
  const { category, priceRange, setCategory, setPriceRange, clearFilters } =
    useFilterStore();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-md font-semibold mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="form-radio text-blue-600"
                />
                <span className="text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priceRange"
                  checked={
                    priceRange.min === range.min && priceRange.max === range.max
                  }
                  onChange={() => setPriceRange(range.min, range.max)}
                  className="form-radio text-blue-600"
                />
                <span className="text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
