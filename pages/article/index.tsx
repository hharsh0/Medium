import { Clap, Comment, Listen, Medium, More, SaveB, Share } from '@/Icons';
import React from 'react'

const Article = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <div>
          <h1 className="font-extrabold text-5xl flex justify-center mt-8">
            I Built an App in 6 Hours that Makes $1,500/Mo
          </h1>
          <p className="text-xl text-gray-500 pt-4">
            Last months most-read stories, most-highlighted sentences, and
            stories by writers new to Medium
          </p>
        </div>
        <div className="flex gap-4 py-6">
          <div>
            {/* <Medium /> */}
            <img
              alt="Medium Staff"
              className="rounded-full"
              src="https://miro.medium.com/v2/resize:fill:44:44/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"
              width={44}
              height={44}
              loading="lazy"
              data-testid="authorPhoto"
            />
          </div>
          <div>
            <div className="flex gap-4">
              <div>Medium Staff</div>
              <div className="text-gray-500">Following</div>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-gray-500">Published in </span>The Medium
                Blog
              </div>
              <div className="text-gray-500">7 min read</div>
              <div className="text-gray-500">Mar 15,2024</div>
            </div>
          </div>
        </div>
        <div className="border-y-1 border-gray-200 py-2 flex text-gray-500 justify-between">
          <div className="flex items-center gap-2">
            <Clap />
            <p className="text-xs cursor-pointer">7.5K</p>
            <Comment />
            <p className="text-xs cursor-pointer">125</p>
          </div>
          <div className="flex gap-6">
            <SaveB />
            <Listen />
            <Share />
            <More />
          </div>
        </div>

        {/* content */}

        <div className="py-8 text-lg">
          Im an elder millennial, meaning I became an adult in the dawn of
          social media — Facebook arrived at my colleges campus during my
          sophomore year in 2004. But it also means that I grew up writing in
          the before times, when wanting to write for an audience still meant
          needing approval from a higher power. For me, sharing words beyond my
          notebook required luck, or school-sponsored newspapers, or access to a
          copy machine for the creation and distribution of a personal zine.
          Because of that, I have internalized a need for permission, a personal
          requirement of external validation. So despite having access to — and
          actually working at! — a platform that shares words with one of the
          best communities on these here interwebs, I often find myself afraid
          to hit publish. Im an elder millennial, meaning I became an adult in
          the dawn of social media — Facebook arrived at my colleges campus
          during my sophomore year in 2004. But it also means that I grew up
          writing in the before times, when wanting to write for an audience
          still meant needing approval from a higher power. For me, sharing
          words beyond my notebook required luck, or school-sponsored
          newspapers, or access to a copy machine for the creation and
          distribution of a personal zine. Because of that, I have internalized
          a need for permission, a personal requirement of external validation.
          So despite having access to — and actually working at! — a platform
          that shares words with one of the best communities on these here
          interwebs, I often find myself afraid to hit publish. Im an elder
          millennial, meaning I became an adult in the dawn of social media —
          Facebook arrived at my colleges campus during my sophomore year in
          2004. But it also means that I grew up writing in the before times,
          when wanting to write for an audience still meant needing approval
          from a higher power. For me, sharing words beyond my notebook required
          luck, or school-sponsored newspapers, or access to a copy machine for
          the creation and distribution of a personal zine. Because of that, I
          have internalized a need for permission, a personal requirement of
          external validation. So despite having access to — and actually
          working at! — a platform that shares words with one of the best
          communities on these here interwebs, I often find myself afraid to hit
          publish.
        </div>
      </div>
    </>
  );
}

export default Article
