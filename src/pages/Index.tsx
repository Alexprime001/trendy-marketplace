
import { StoreProvider } from "@/context/StoreContext";
import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Our Latest Collection
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Shop the most trending products with amazing deals and discounts.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
                Shop Now
              </button>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 aspect-square">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-lg font-medium text-center px-4">
                        {category}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
                <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                  View All →
                </button>
              </div>
              <ProductGrid />
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get updates about new products and special offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-md px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </StoreProvider>
  );
};

export default Index;
