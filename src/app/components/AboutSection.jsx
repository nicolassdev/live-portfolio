"use client";
import React, { useTransition, useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-sm">
        <li>Node.js</li>
        <li>PHP</li>
        <li>C#</li>
        <li>Vue</li>
        <li>Javascript</li>
        <li>Wordpress</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Science in Computer Science</li>
        <li className="font-semibold text-[#ADB7BE] text-sm">
          Computer Systems Insitute
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>Front End Development</li>
        <li className="font-semibold text-[#ADB7BE] text-sm">Pixel8 Academy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  // function takes id
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/about-img.svg"
          draggable="false"
          alt="hero image"
          className="rounded mt-3"
          width={450}
          height={450}
        />
        <div ref={textRef}>
          <h2 className="text-4xl font-bold text-white mb-4 mt-6">About Me</h2>
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
