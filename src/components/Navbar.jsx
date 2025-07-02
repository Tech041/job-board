"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-[80px] flex justify-center items-center shadow-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container">
        <div className=" flex justify-between items-center">
          {/* Logo or Brand */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-gray-200 transition"
          >
            JobBoard
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex gap-6 text-sm md:text-base font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition duration-200 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/post"
                  className="hover:text-yellow-300 transition duration-200 ease-in-out"
                >
                  Post Job
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
