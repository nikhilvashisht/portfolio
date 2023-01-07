import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
const Card = ({ title, text, github_link, playstore_link, appstore_link }) => {
  return (
    <div className="flex justify-center max-w-md max-h-md">
      <div className="relative block p-5 shadow-lg rounded-lg bg-gradient-to-tl from-[#FC59FE] to-[#fb4176]">
        {/* project title */}
        <h4 className="text-white text-center text-4xl">{title}</h4>

        {/* project about section */}
        <p className="text-white py-3 text-center">{text}</p>

        {/* playstore link */}
        {playstore_link && playstore_link.length > 0 && (
          <div className="w-full justify-center flex mt-5 py-2">
            <FaGooglePlay />
            <a href={playstore_link} className="px-2">
              Download from Google Play
            </a>
          </div>
        )}

        {/* appstore link */}
        {appstore_link && appstore_link.length > 0 && (
          <div className="flex justify-center w-full mt-5 py-2">
            {" "}
            <FaAppStoreIos />
            <a href={appstore_link} className="px-2">
              Download from App store
            </a>
          </div>
        )}

        {/* github link */}
        {github_link && github_link.length > 0 && (
          <div className="absolute bottom-5 right-0 left-0 flex justify-center w-full py-2">
            {" "}
            <AiOutlineGithub />
            <a href={github_link} className="px-2">
              Github
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

// <div class="flex justify-center">
//   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
//   <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
//   <p class="text-gray-700 text-base mb-4">
//     Some quick example text to build on the card title and make up the bulk of the card's
//     content.
//   </p>
//   <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
// </div>
// </div>
