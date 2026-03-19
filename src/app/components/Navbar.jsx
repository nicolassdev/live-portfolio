"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { gsap } from "gsap";
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-wide text-white hover:text-cyan-400 transition"
        >
          Nicolas<span className="text-cyan-400">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
