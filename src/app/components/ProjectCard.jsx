"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const isGitExternal = gitUrl?.startsWith("http");
  const isPreviewExternal = previewUrl?.startsWith("http");
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute inset-0 flex items-center justify-center gap-4 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* GIT LINK */}
          {gitUrl &&
            (isGitExternal ? (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
              </a>
            ) : (
              <Link
                href={gitUrl}
                className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
              </Link>
            ))}

          {/* PREVIEW LINK */}
          {previewUrl &&
            (isPreviewExternal ? (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
              </a>
            ) : (
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white relative"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
              </Link>
            ))}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
