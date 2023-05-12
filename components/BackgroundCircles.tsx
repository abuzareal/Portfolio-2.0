import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mb-20"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-80 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-80" />
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-80" />
      <div className="rounded-full border border-[#45b3e0] opacity-20 h-[450px] w-[450px] absolute mt-80 animate-pulse" />
      <div className="rounded-full border border-[#333333] opacity-20 h-[550px] w-[550px] absolute mt-80" />
    </motion.div>
  );
}

export default BackgroundCircles;
