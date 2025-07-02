"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Link from "next/link";

const JobCard = ({ company, title, location, salary, detailsUrl }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 w-full ">
      <h3 className="text-center text-indigo-700 text-lg font-semibold mb-1 capitalize">
        {company}
      </h3>
      <h2 className=" text-center text-slate-800 text-xl font-bold mb-3 capitalize">
        {title}
      </h2>

      <div className="flex justify-center items-center text-slate-600 mb-2">
        <FaMapMarkerAlt className="mr-2 text-teal-500" />
        <span className="capitalize">{location}</span>
      </div>

      <div className="flex justify-center items-center text-slate-600 mb-4">
        <span>{salary}</span>
      </div>

      <Link
        href={detailsUrl}
        className="text-center inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
      >
        View Job Details
      </Link>
    </div>
  );
};

export default JobCard;
