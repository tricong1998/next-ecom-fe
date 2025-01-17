import ProductList from "@/components/shared/product/product-list";
import { sampleData } from "@/db/sample-data";

export default function Home() {
  return (
    <div className="flex-start flex-col">
      <ProductList limit={4} products={sampleData.products} title="Newest Arrivals"></ProductList>
    </div>
  );
}
