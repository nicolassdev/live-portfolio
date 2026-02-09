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
    previewUrl: "https://erp.pixel8.ph/erp/#/login",
  },
  {
    id: 2,
    title: "Realty",
    description: "Sunwest Realty using WordPress",
    image: "/projects/realty.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://stg-realty.pixel8.ph/",
  },
  {
    id: 3,
    title: "Pristine Memorial Garden",
    description: "Pristine Memorial using WordPress",
    image: "/projects/pristine-memorial.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://stg-pristinememorial.pixel8.ph/",
  },
  {
    id: 4,
    title: "South Eastern Fiber",
    description: "South Eastern Fiber using WordPress",
    image: "/projects/sef.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://southeasternfiber.com/",
  },
  {
    id: 5,
    title: "LMS",
    description: "Learning Management System of CSI",
    image: "/projects/lms.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "NSTP Management System",
    description: "NSTP Management System of CSI",
    image: "/projects/nstp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
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
    project.tag.includes(tag),
  );

  return (
    <section id="project">
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
    </section>
  );
};

export default ProjectSection;
