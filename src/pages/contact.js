import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 w-auto h-2/4">
      <h1 className="text-center text-6xl">Contact</h1>

      <div className="grid grid-cols-1 justify-items-center mt-10 mx-96">
        <div className="my-5 flex justify-center min-w-full p-5 rounded-lg bg-gradient-to-r from-[#FC59FE] to-[#fb4176]">
          <AiOutlineInstagram /> <p className="px-5"> Instagram </p>
        </div>
        <div className="my-5 flex justify-center min-w-full p-5 rounded-lg bg-gradient-to-r from-[#FC59FE] to-[#fb4176]">
          <AiOutlineGithub /> <p className="px-5"> Github </p>
        </div>
        <div className="my-5 flex justify-center min-w-full p-5 rounded-lg bg-gradient-to-r from-[#FC59FE] to-[#fb4176]">
          <AiOutlineLinkedin /> <p className="px-5">LinkedIn </p>
        </div>
        <div className="my-5 flex justify-center min-w-full p-5 rounded-lg bg-gradient-to-r from-[#FC59FE] to-[#fb4176]">
          <AiOutlineTwitter /> <p className="px-5"> Twitter </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
