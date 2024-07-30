import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/about-me.jpg"
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
          <div className="">flex flex-row mt-8</div>
          <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-teal-500">
            Skills
          </span>
          <span>Experience</span>
          <span>Education</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
