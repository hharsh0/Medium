import Image from "next/image";
import { Inter } from "next/font/google";
import { Tabs, Tab } from "@nextui-org/react"; 
import Card from "@/components/Card";
import sampleData from "@/Data/data";
import RecommendedTopics from "@/components/RecommendedTopics";
import {
  AvatarFallback,
  AvatarImage,
  AvatarSmall,
} from "@/components/ui/avatar";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "@/Icons";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [<Plus/>, "For you", "Following", "Creativity", "Film", "Space", "Apple", "Android"];

  const handleTabClick = (index: SetStateAction<number>) => {
    setSelectedTab(index);
  };
  return (
    <>
      <div className="flex">
        <div className="">
          {/* <div className="my-4 border-b text-stone-300 bg-red-300">
            <Tabs variant="underlined" aria-label="Tabs variants">
              <Tab title="For you" />
              <Tab title="Following" />
              <Tab title="Creativity" />
              <Tab title="Film" />
              <Tab title="Space" />
              <Tab title="Apple" />
              <Tab title="Android" />
              <Tab title="Web development" />
            </Tabs>
          </div> */}
          <div className="my-4 hidden sm:flex items-center justify-between font-normal text-sm text-gray-500 px-8 overflow-x-auto max-w-3xl shrink-0 ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`${
                  index === selectedTab
                    ? "border-b-1 border-gray-800 text-gray-800"
                    : "border-b border-transparent"
                } py-2 px-4 focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="">
            {sampleData.map((data, index) => (
              <>
                <Link key={index} href="/article">
                  <Card title={data.title} content={data.content} />
                </Link>
                <Divider />
              </>
            ))}
          </div>
        </div>

        <div className=" mx-4 p-4 border-l border-gray-200 hidden sm:block">
          <div className="my-4">
            <div className="font-medium">Staff Picks</div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div className="text-sm font-medium">Ryan Tripp</div>
              </div>
              <div className="font-semibold mt-2">
                The Perks of Being a Capabale Novice
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div className="text-sm font-medium">Jeffrey Anthony</div>
              </div>
              <div className="font-semibold mt-2">
                I Asked Generative AI Music Platform Suno to Write a Podcast
                Theme…Things Got Weird
              </div>
            </div>

            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div className="text-sm font-medium">Richelle Carey</div>
              </div>
              <div className="font-semibold mt-2">
                The Complexity of Choice: Abortion, Motherhood, and the Adoption
                Conversation
              </div>
            </div>
          </div>

          <div className="mt-8">
            <RecommendedTopics />
          </div>

          <div className="my-8">
            <div className="font-medium ">Who to follow</div>

            {/* content */}
            <div className="my-2 flex items-center gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div>
                  <p className="font-medium">Scott Myers</p>
                  <p className="text-gray-500 text-xs">
                    Stay here for Poems | Fiction | Short Stories | TV Show
                  </p>
                </div>
              </div>

              <div className="border-2 p-2 rounded-full text-xs border-gray-800 cursor-pointer">
                Follow
              </div>
            </div>

            <div className="my-2 flex items-center gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div>
                  <p className="font-medium">Ethan Siegel</p>
                  <p className="text-gray-500 text-xs">
                    Short Stories | TV Show
                  </p>
                </div>
              </div>

              <div className="border-2 p-2 rounded-full text-xs border-gray-800 cursor-pointer">
                Follow
              </div>
            </div>

            <div className="my-2 flex items-center gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <AvatarSmall>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </AvatarSmall>
                <div>
                  <p className="font-medium">Kallol Mazumdar</p>
                  <p className="text-gray-500 text-xs">
                    The Universe is: Expanding, cooling, and dark. It starts
                    with...
                  </p>
                </div>
              </div>

              <div className="border-2 p-2 rounded-full text-xs border-gray-800 cursor-default">
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
