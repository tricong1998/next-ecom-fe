import Link from "next/link";
import Logo from "../logo";
import Menu from "./menu";

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
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
