"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>PHP</li>
        <li>CSHARP</li>
        <li>Vue</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Science in Computer Science</li>
        <li>Computer Systems Insitute Inc.</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>Front End Development</li>
        <li>Pixel8 Academy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  // function takes id
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/about-img.svg"
          alt="hero image"
          className="rounded mt-3"
          width={450}
          height={450}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate web developer with a deep love for coding and
            creating intuitive, user-friendly web interfaces. Although I am
            still in the early stages of my career and have worked on fewer
            projects, I am constantly learning and honing my skills to deliver
            high-quality work. My enthusiasm for technology drives me to stay
            updated with the latest trends and best practices in web
            development. I am eager to take on new challenges and grow as a
            developer, contributing to innovative projects and making a positive
            impact through my work.
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-6 md:text-md">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
