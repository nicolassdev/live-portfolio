"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiMessenger,
  SiInstagram,
} from "react-icons/si";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect with me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am now looking for possibilities in web development. If you're
          seeking a skilled developer, let's collaborate!
        </p>

        <div className="flex gap-4 text-white">
          <Link href="#"><SiGithub size={36} /></Link>
          <Link href="#"><SiFacebook size={36} /></Link>
          <Link href="#"><SiLinkedin size={36} /></Link>
          <Link href="#"><SiMessenger size={36} /></Link>
          <Link href="#"><SiInstagram size={36} /></Link>
        </div>
      </div>

      {/* FORM */}
      <div className="mt-5">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-white text-sm">Your Email</label>
            <input
              name="email"
              type="email"
              required
              className="bg-[#18191E] border border-[#33353F] text-gray-100 rounded-lg w-full p-4"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-white text-sm">Subject</label>
            <input
              name="subject"
              type="text"
              required
              className="bg-[#18191E] border border-[#33353F] text-gray-100 rounded-lg w-full p-4"
              placeholder="Just saying hi"
            />
          </div>

          <div>
            <label className="text-white text-sm">Message</label>
            <textarea
              name="message"
              required
              className="bg-[#18191E] border border-[#33353F] text-gray-100 rounded-lg w-full p-4"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm">
              ✅ Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
