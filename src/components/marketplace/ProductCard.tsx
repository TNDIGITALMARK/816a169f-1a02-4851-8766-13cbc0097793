import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  className?: string;
}

export function ProductCard({ id, title, price, image, isNew, className = "" }: ProductCardProps) {
  return (
    <Link href={`/browse/${id}`} className={`block ${className}`}>
      <div className="bg-white rounded-lg border border-border shadow-card hover:shadow-md transition-shadow overflow-hidden group">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <span className="absolute top-2 right-2 badge-new">
              New
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
          <p className="text-lg font-bold text-primary mb-3">
            ${price.toFixed(2)}
          </p>
          <button className="w-full bg-primary text-white font-medium text-sm py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
}
