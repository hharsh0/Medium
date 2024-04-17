import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, AvatarSmall } from "@/components/ui/avatar";
import Image from 'next/image';
import { Chip, Divider } from "@nextui-org/react";
import { Minus, Save } from '@/Icons';

interface props{
    title: string,
    content: string
}


const Card = ({title,content}:props) => {
  return (
    <div className="container flex cursor-pointer py-4 items-center gap-8">
      <div>
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
          <p className="break-words">{content}</p>
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
            <Save />
            <Minus />
          </div>
        </div>
      </div>

      {/* <Divider className="my-2" /> */}

      <div>
        <img
          alt="3 hard lessons I have had to teach my ADHD brain"
          className="object-cover h-32 w-32"
          src="https://miro.medium.com/v2/resize:fill:112:112/1*s0P6uoi_6vD72-fG47B2Sw.jpeg"
          // width={112}
          // height={112}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Card
