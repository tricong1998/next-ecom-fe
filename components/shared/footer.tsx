import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return <div className="wrapper flex-center border-t">{new Date().getFullYear()} {APP_NAME}. All Rights Reserved</div>;
};

export default Footer;
