import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
      >
        <img
          className="-mb-20 mt-8 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[320px] xl:h-[380px]"
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Image"
          width={420}
          height={420}
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 mb-0 xl:max-w-3xl">
        <h4 className="text-2xl md:text-4xl font-semibold my-0">
          Here is a{" "}
          <span className="underline decoration-[#45b3e0]/50">little</span>{" "}
          background
        </h4>

        <p className="my-0">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
