import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Divider } from "@nextui-org/react";
import { Medium, Write, Search, Bell} from "@/Icons";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";


const Layout = ({ children }: any) => {
  return (
    <>
      <nav className="flex items-center w-full justify-between px-4 my-2 shrink-0">
        <div className="flex items-center gap-4 shrink-0">
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

        <div className="flex items-center gap-4 cursor-pointer shrink-0">
          <div className="flex items-center text-gray-500 gap-2">
            <Write />
            <p className="hover:text-stone-950">Write</p>
          </div>
          <div className="text-gray-500">
            <Bell />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 text-gray-500" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4 text-gray-500" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4 text-gray-500" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
