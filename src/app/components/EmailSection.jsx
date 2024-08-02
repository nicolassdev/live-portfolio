import React from "react";
import GithubIcon from "../../../public/images/github-img.svg";
import LinkedinIcon from "../../../public/images/linkedin-img.svg";
import FacebookIcon from "../../../public/images/fb-img.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am now looking for possibilities in web development. If you're
          seeking for a devoted and skilled developer to bring your initiatives
          to life, let's collaborate! Please contact me via the form below or on
          social media.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="facebook.com">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
      </div>
      {/* FORM  */}
      <div>
        <form className="flex flex-col gap-6" action="">
          {/* EMAIL INPUT */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-md rounded-lg block w-full p-3.5"
              placeholder="nicolasdaen@gmail.com"
            />
          </div>

          {/* EMAIL INPUT */}
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-md rounded-lg block w-full p-3.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-md rounded-lg block w-full p-3.5"
              placeholder="Let's talk about..."
            />
          </div>
          {/* BUTTON */}
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3.5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
