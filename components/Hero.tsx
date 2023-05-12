import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      "Guy-who-likes-to-break-code.jsx",
      "But loves to build more:)</>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ml-4">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#45b3e0" />
        </h1>
        <div className="pt-5">
          <Link className="px-1 md:px-4" href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link className="px-1 md:px-4" href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link className="px-1 md:px-4" href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link className="px-1 md:px-4" href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
