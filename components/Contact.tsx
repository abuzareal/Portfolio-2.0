import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    window.location.href = `mailto:abuzart1999@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-6xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4">
        <h4 className="text-base font-semibold pt-8  md:text-xl text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#45b3e0]/50 underline">Lets Talk.</span>
        </h4>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-24 md:pt-6">
          <div className="space-y-5 md:space-y-10 md:mt-10 pr-10 ">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#45b3e0] h-5 w-5 animate-pulse" />
              <p className="text-sm md:text-lg">+1234567890</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#45b3e0] h-5 w-5 animate-pulse" />
              <p className="text-sm md:text-lg">abuzart1999@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#45b3e0] h-5 w-5 animate-pulse" />
              <p className="text-sm md:text-lg">123 Developer Lane</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-1 w-fit mx-10 md:mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#45b3e0] py-2 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
