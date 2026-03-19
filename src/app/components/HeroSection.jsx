"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";

const HeroSection = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9 },
      )
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8, rotate: -5 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1 },
          "-=0.8",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            ref={headingRef}
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-slate-500">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Anthony Daen",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p
            ref={paraRef}
            className="text-[#ADB7BE] text-base sm:text-lg md-6 lg:text-xl"
          >
            Dynamic and motivated programmer with a passion for crafting
            efficient and scalable software solutions. Seeking to leverage
            expertise in Front-End development to contribute to the innovative
            projects at your Company. I aim to drive technological advancement
            and exceed expectations in a collaborative team environment.
          </p>
          <div ref={buttonsRef}>
            <button className="px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-500 hover:bg-teal-300 text-white mt-3">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-teal-500 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-6 py-4">
                <a href="/files/Resume.pdf" target="_blank">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div
            ref={imageRef}
            className="relative rounded-full bg-[#208181] w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-image1.png"
              alt="Profile picture"
              fill
              priority
              draggable={false}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
