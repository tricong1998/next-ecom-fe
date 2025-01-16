import { Button } from "@/components/ui/button";
import ModelToggle from "./model-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="">
      <nav className="hidden md:flex gap-1">
        <RightMenu></RightMenu>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <EllipsisVertical></EllipsisVertical>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <RightMenu></RightMenu>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

const RightMenu = () => {
  return (
    <>
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
    </>
  );
};

export default Menu;
