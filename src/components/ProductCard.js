import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <Link href={`/product/${product.id}`}>
        <h3 className="font-medium hover:text-primary transition-colors">
          {product.title}
        </h3>
      </Link>
      <p className="text-primary font-semibold mt-2">${product.price}</p>
    </div>
  );
}
