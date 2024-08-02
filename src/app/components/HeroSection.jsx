"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-slate-500">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Anthony Daen",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front End Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md-6 lg:text-xl">
            Dynamic and motivated programmer with a passion for crafting
            efficient and scalable software solutions. Seeking to leverage
            expertise in Front-End development to contribute to the innovative
            projects at your Company. I aim to drive technological advancement
            and exceed expectations in a collaborative team environment.
          </p>
          {/*  Buttons */}
          <div>
            <button className="px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-500 via- hover:bg-teal-300  text-white mt-3">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-teal-500  text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-6 py-4">
                <a href="/files/Resume.pdf" target="_blank" className="btn">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
        {/* Imagee */}
        <div className="col-span-5 place-self-center mt-9 lg:mt-0">
          <div className="rounded-full bg-[#208181] w-[310px] h-[310px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.svg"
              draggable="false"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
