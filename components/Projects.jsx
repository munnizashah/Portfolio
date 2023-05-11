import React from "react";
// import propertyImg from "../public/assets/projects/property.jpeg";
// import cryptoImg from "../public/assets/projects/crypto.jpeg";
// import netflixImg from "../public/assets/projects/netflix.jpeg";
// import twitchImg from "../public/assets/projects/twitch.jpeg";
import portfoliopic from "public/assets/projects/portfoliopic.png";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What Ive Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfoliopic}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Crypto App"
            // backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix"
            // backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch"
            // backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
