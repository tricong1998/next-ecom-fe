import Product from "./product";
import { IProduct } from "./product-type";

const ProductList = ({
  products,
  title,
  limit,
}: {
  products: IProduct[];
  title: string;
  limit?: number;
}) => {
  const limitedData = limit ? products.slice(0, limit) : products;
  return (
    <div className="flex flex-col gap-2">
      <div className="h2-bold">{title}</div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {limitedData.length ? (
          limitedData.map((el) => <Product key={el.slug} product={el}></Product>)
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
