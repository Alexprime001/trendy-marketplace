
import { Product } from "@/types/store";
import { useStore } from "@/context/StoreContext";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="px-4 py-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price}</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating.rate}
            </span>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors duration-200"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
