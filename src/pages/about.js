import React from "react";
import me from "../assets/me.jpg";

const About = () => {
  return (
    <div id="about" className="flex justify-center mt-20 h-screen">
      {/* about me para begins*/}
      <div className="pl-5 mt-20">
        <h1 className="text-6xl">About Me</h1>
        {/* FIXME: change uppercase to normal-case */}
        {/* TODO: add more context in the paragraph */}
        <div className="flex-wrap text-2xl mt-10 pr-10 lowercase">
          I am a senior at Netaji Subhas University of Technology, currently
          pursuing B.Tech in Electronics and Communication engineering with AI
          and ML. I have a keen interest in development and I like to explore
          new technologies. My fields of interest are App Development, Web
          Development and Machine learning.
        </div>
      </div>
      {/* about me para ends */}

      {/* image  */}
      {/* TODO: add effects to the image, looks boring currently */}
      <div className="w-full">
        <img src={me} alt="deez" className="mt-10 h-96 w-96 rounded-3xl" />
      </div>
    </div>
  );
};

export default About;
