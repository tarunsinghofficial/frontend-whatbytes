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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
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
                className="px-2 py-1 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-gray-900 font-medium">{quantity}</span>
              <button
                onClick={(e) => handleUpdateQuantity(e, quantity + 1)}
                className="px-2 py-1 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
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
