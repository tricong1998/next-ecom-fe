"use client";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex-center h-screen w-screen flex-col">
      <div className="flex-center">
        <Logo></Logo>
      </div>
      <div className="flex flex-col justify-center space-y-2 w-1/3 py-8 border-x border-b rounded-sm shadow-md">
        <div className="h2-bold text-center">Not Found</div>
        <div className="text-destructive text-center">
          Could not find requested page
        </div>
        <div className="flex-center">
          <Button variant={"outline"} asChild>
            <Link className="px-2" href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
