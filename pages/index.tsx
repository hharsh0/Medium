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



const inter = Inter({ subsets: ["latin"] });

const Icon = ()=>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex justify-center my-4">
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
          </div>
          <div className="justify-center mt-8">
            {sampleData.map((data) => (
              <Card title={data.title} content={data.content} />
            ))}
          </div>
        </div>

        <div className=" mx-4 p-4 border-l border-gray-100">
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

              <div className="border-2 p-2 rounded-full text-xs border-gray-800">
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

              <div className="border-2 p-2 rounded-full text-xs border-gray-800">
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

              <div className="border-2 p-2 rounded-full text-xs border-gray-800">
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
