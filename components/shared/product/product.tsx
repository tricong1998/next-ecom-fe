import { IProduct } from "./product-type";
import Image from "next/image";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col border shadow">
      {product.images.length && (
        <Image src={product.images[0]} alt={"product image"} width={300} height={300}></Image>
      )}
      <div className="flex flex-col p-4">
        <div className="text-xs">{product.brand}</div>
        <div className="text-sm font-medium">{product.name}</div>
      </div>
    </div>
  );
};

export default Product;
