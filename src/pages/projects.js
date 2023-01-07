import React from "react";
import Card from "../components/projectcard";

const Project = () => {
  return (
    <div id="projects" className="mt-10 w-auto h-screen">
      <h1 className="flex justify-center text-6xl">Projects</h1>

      {/* cards */}

      <div className="flex justify-between mx-5 mt-10">
        <Card
          title={"nsutx"}
          text={
            "An app for students to keep up with college notices, attendance, time-table and much more college related activities. Developed together with my college club."
          }
          playstore_link={"https://play.google.com/store/apps/details?id=com.devcomm.nsutx"}
          appstore_link={"https://apps.apple.com/in/app/nsutx/id1555744187"}
        />
        <Card
          title={"Movie-recommendation app"}
          text={
            "Flutter app with backend using flask for movie-recommendation."
          }
          github_link={"https://github.com/nikhilvashisht/Movie-recommendation"}
        />
        <Card
          title={"Wallpaper-generator"}
          text={
            "App which generates unique wallpapers using NASAS' APOD API and a random quote by Kanye"
          }
          github_link={"https://github.com/nikhilvashisht/wallpaper-generator"}
        />
      </div>
    </div>
  );
};

export default Project;
