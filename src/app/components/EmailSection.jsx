"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiMessenger } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    // FORM REQ FOR SENDING DATA TO SERVER
    const options = {
      method: "POST", //METHOD IS POST BECAUSE WE ARE SENDING DATA
      //Tell the server we're sending Json
      headers: {
        "Contant-Type": "application/json",
      },
      body: JSONdata,
    };
    const responce = await fetch(endpoint, options);
    const resData = await responce.json();

    if (resData.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect with me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am now looking for possibilities in web development. If you're
          seeking for a devoted and skilled developer to bring your initiatives
          to life, let's collaborate! Please contact me via the form below or on
          social media.
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="github.com">
            <SiGithub size={40} />
          </Link>
          <Link href="github.com">
            <SiFacebook size={40} />
          </Link>
          <Link href="github.com">
            <SiLinkedin size={40} />
          </Link>

          <Link href="messenger.com">
            <SiMessenger size={40} />
          </Link>
          <Link href="messenger.com">
            <SiInstagram size={40} />
          </Link>
        </div>
      </div>
      {/* FORM  */}
      <div className="mt-5">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit} action="">
          {/* EMAIL INPUT */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-md rounded-lg block w-full p-4"
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
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-md rounded-lg block w-full p-4"
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
          {
            //IF EMAIL SUBMITTED SHOWING MESSAGE SHOW UP
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent succesfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
