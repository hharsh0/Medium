import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, AvatarSmall } from "@/components/ui/avatar";
import Image from 'next/image';
import { Chip, Divider } from "@nextui-org/react";

interface props{
    title: string,
    content: string
}


const Card = ({title,content}:props) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <AvatarSmall>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </AvatarSmall>
        <div className="flex items-center gap-2">
          <div>Julien Etienne</div>
          <div className="text-gray-500">Dec 22, 2023</div>
        </div>
      </div>

      <div className="my-4">
        <div className="font-bold text-xl">{title}</div>
        <p>
          {content}
        </p>
      </div>
      {/* <div className="h-18 w-18">
        <img
          className="h-18 w-18 object-cover"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*B9czCu8g4ihd4Ijq.png"
          alt="img"
        />
      </div> */}

      {/* <Image src="/img.png" height={10} width={10} alt="img" /> */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Chip className="text-gray-700">Coding</Chip>
          <p className="text-sm text-gray-500">7 min read</p>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
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
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      <Divider className="my-2" />
    </div>
  );
}

export default Card
