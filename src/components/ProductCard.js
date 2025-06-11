import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

const ProductCard = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const items = useCartStore((state) => state.items);

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const handleUpdateQuantity = (e, newQuantity) => {
    e.preventDefault();
    if (newQuantity === 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.title}
          </h3>
          {product.reviews && product.reviews.length > 0 && (
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.reviews[0].rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Category: {product.category}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {quantity > 0 ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => handleUpdateQuantity(e, quantity - 1)}
                className="px-2 py-1 border border-[#0758A8] text-[#0758A8] rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                -
              </button>
              <span className="text-gray-900 font-medium">{quantity}</span>
              <button
                onClick={(e) => handleUpdateQuantity(e, quantity + 1)}
                className="px-2 py-1 border border-[#0758A8] text-[#0758A8] rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-[#0758A8] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
