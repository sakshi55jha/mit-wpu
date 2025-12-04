"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle =
    "py-1 px-2 hover:text-blue-400 transition-colors duration-200 block lg:inline-block";
  const dividerStyle = "text-gray-600 hidden lg:inline";
  const mobileLinkStyle =
    "text-lg font-medium p-3 hover:bg-gray-700 w-full text-left";

  return (
    <header className="bg-gray-900 w-full text-white sticky transition-colors top-0 z-50 shadow-md font-roboto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 py-1">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center border-r border-gray-600 pr-4">
                <div className="w-12 h-12 border-2 border-white rounded-t-full flex items-end justify-center mb-1 relative">
                  <div className="w-8 h-8 border-2 border-white rounded-t-full absolute bottom-0"></div>
                  <div className="w-1 h-2 bg-white absolute -top-1"></div>
                </div>
                <span className="text-[10px] font-bold tracking-widest mt-1">
                  MIT-WPU
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-[10px] text-gray-400 italic mb-0.5">
                  Since 1983
                </span>
                <span className="text-[10px] text-gray-400">
                  Dr. Vishwanath Karad
                </span>
                <h1 className="text-lg md:text-xl font-bold leading-none tracking-wide mt-1">
                  MIT WORLD PEACE <br />
                  <span className="text-base font-normal">UNIVERSITY</span>{" "}
                  <span className="text-sm font-light">| PUNE</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="navbar-links">
              <div className="upper-link text-xs flex items-center justify-end mb-2 space-x-1">
                <Link href="#" className={linkStyle}>
                  IQAC
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Faculty
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Alumni
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Placement
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  UGC Approved
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Work With Us
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Student Info
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Green Campus
                </Link>
                <span className={dividerStyle}>|</span>
                <Link href="#" className={linkStyle}>
                  Blogs
                </Link>

                <Link
                  href="#enquire"
                  className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>

              <div className="lower-link text-sm flex items-center justify-end space-x-2">
                <Link href="#" className={linkStyle}>
                  About Us
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Programmes
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Admissions
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Academics
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Life@MIT-WPU
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  International
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Research
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Innovation
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link href="#" className={linkStyle}>
                  Media Coverage
                </Link>
                <button className="ml-2 p-1 hover:bg-gray-800 rounded">
                  <Menu className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full bg-gray-800 transition-all duration-300 ease-in-out transform 
                            ${
                              isMenuOpen
                                ? "max-h-screen opacity-100 py-4 shadow-xl"
                                : "max-h-0 opacity-0 overflow-hidden"
                            }`}
      >
        <nav className="flex flex-col items-center space-y-2 px-4">
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Programmes
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Academics
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Life@MIT-WPU
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Research
          </Link>
          <Link
            href="#"
            className={mobileLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            International
          </Link>

          <Link
            href="#enquire"
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg w-full text-center hover:bg-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </Link>
        </nav>

        <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col items-center space-y-1 text-sm text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">
            IQAC | Faculty | Alumni
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Placement | Work With Us | Blogs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
