import React from "react";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 mt-20 flex-shrink-0 w-[300px] h-[400px] md:w-[900px] xl-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <img
        className="w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Image"
        width={100}
        height={100}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Software Engineer</h4>
        <p className="font-bold text-xl mt-1">Capgemini</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
