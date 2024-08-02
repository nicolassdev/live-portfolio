"use client";
import Link from "next/link";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden md:overflow-auto">
      <Image
        draggable="false"
        src="/images/error-img.svg"
        alt="hero image"
        className="rounded"
        width={400}
        height={400}
      />
      <div className="text-center pt-6">
        <div className="text-4xl font-bold text-[#14b8a6]">
          Sorry, this page is under construction.
        </div>
        <p className="pt-2">This page could not be found.</p>
        {/* this is button go to home  */}
        <div className="pt-7">
          <Link
            href="/"
            className="px-5 py-3 bg-teal-500 text-white rounded hover:bg-slate-600"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
