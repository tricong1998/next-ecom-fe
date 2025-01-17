import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const price = value.toFixed(2);
  const [integer, decimals] = price.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integer}
      <span className="text-xs align-super">.{decimals}</span>
    </p>
  );
};

export default ProductPrice;
