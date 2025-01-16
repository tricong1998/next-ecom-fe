import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ModelToggle from "./model-toggle";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="w-full border-b z-0">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Logo></Logo>
            <span className="hidden lg:block font-bold text-2xl ml-3">
              Cole store
            </span>
          </Link>
        </div>
        <div className="space-x-2 flex-between">
          <ModelToggle></ModelToggle>
          <Button variant={"ghost"} asChild>
            <Link href={"/cart"}>
              <ShoppingCart></ShoppingCart> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/user"}>
              <UserIcon></UserIcon> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
