import React from 'react'
import { Chip, Divider } from "@nextui-org/react";

const topics = ["Data Science","Technology","Self Improvement","Writing","Productivity","Politics","Cryptocurrency"]


const RecommendedTopics = () => {
  return (
    <div>
      <div className="font-medium">Recommended Topics</div>
      <div className="flex gap-2 flex-wrap my-4">
        {topics.map((data,index)=> <Chip key={index}>{data}</Chip>)}
      </div>
    </div>
  )
}

export default RecommendedTopics
