import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Divider } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Medium, Write, Search, Bell} from "@/Icons";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <>
      <nav className="flex items-center w-full justify-between px-4 my-2">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Medium />
          </Link>
          <div className="items-center text-gray-600 gap-2 hidden sm:flex">
            <Search />
            <input
              className="appearance-none border-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <div className="flex items-center text-gray-500 gap-2">
            <Write />
            <p className="hover:text-stone-950">Write</p>
          </div>
          <div className="text-gray-500">
            <Bell />
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      <Divider className="" />

      <div className="">
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Layout;
