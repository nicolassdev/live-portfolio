"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";
const projectsData = [
  {
    id: 1,
    title: "JuanHR",
    description: "Human Resource Information Management System",
    image: "/projects/juanhr.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Realty",
    description: "Sunwest Realty using WordPress",
    image: "/projects/realty.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://stg-realty.pixel8.ph/",
  },
  {
    id: 3,
    title: "Pristine Memorial Garden",
    description: "Pristine Memorial using WordPress",
    image: "/projects/pristine-memorial.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://stg-pristinememorial.pixel8.ph/",
  },
  {
    id: 4,
    title: "BikeShop Website",
    description: "BikeShop using PHP",
    image: "/projects/bikeshop.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
