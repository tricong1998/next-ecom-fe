import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/images/logo.svg"}
      alt={`${APP_NAME} logo`}
      height={48}
      width={48}
      priority={true}
    ></Image>
  );
};

export default Logo
