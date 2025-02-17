
import { StoreProvider } from "@/context/StoreContext";
import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <ProductGrid />
        </main>
      </div>
    </StoreProvider>
  );
};

export default Index;
