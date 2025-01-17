import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IProduct } from "./product-type";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <CardHeader>
        {product.images.length && (
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={"product image"}
              width={300}
              height={300}
            ></Image>
          </Link>
        )}
      </CardHeader>
      <CardContent className="gap-4 p-4 grid">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <div className="text-sm font-medium">{product.name}</div>
        </Link>
      </CardContent>
      <CardFooter className="flex-between p-4">
        <div>{product.rating}</div>
        {product.stock > 0 ? (
          <p className="font-bold">{product.price}</p>
        ) : (
          <p className="text-destructive">Out of stock</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
