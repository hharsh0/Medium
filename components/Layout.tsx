import {useEffect, useState} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Divider } from "@nextui-org/react";
import { Medium, Write, Search, Bell } from "@/Icons";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/AuthSlice";
import Cookies from "js-cookie";

const Layout = ({ children }: any) => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const [photoURL, setPhotoURL] = useState<string | undefined>(undefined);
  const handleLogout = ()=>{
    dispatch(logout());
  }
  useEffect(() => {
    const storedPhotoURL = Cookies.get("photoURL");
    console.log(storedPhotoURL)
    setPhotoURL(storedPhotoURL || "https://github.com/shadcn.png"); 
  }, []);
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
                    src={`${photoURL}`}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* <img
                  src={photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                /> */}
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
                  <DropdownMenuItem onClick={handleLogout}>
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

const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFC017]">
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Medium />
            <div className="font-black text-3xl">Medium</div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">Our story</div>
          <div className="hidden lg:block">Membership</div>
          <div className="hidden lg:block">Write</div>
          <div className="hidden lg:block">Sign in</div>
          <button className="bg-black text-white rounded-full px-10 py-2">
            Get started
          </button>
        </div>
      </nav>
      <Divider className="" />

      <div className="flex-grow flex items-center">
        <div className="container mx-auto flex-grow items-center">
          {children}
        </div>
      </div>
      <Divider className="" />

      <div className="w-full hidden sm:flex items-center justify-center gap-4 text-xs text-gray-500 py-6 bg-white">
        <div>Help</div>
        <div>Status</div>
        <div>About</div>
        <div>Careers</div>
        <div>Press</div>
        <div>Blog</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Text to speech</div>
        <div>Teams</div>
      </div>
    </div>
  );
};

const MainLayout = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {isLoggedIn ? (
        <Layout>{children}</Layout>
      ) : (
        <AuthLayout>{children}</AuthLayout>
      )}
    </>
  );
};

export default MainLayout;
