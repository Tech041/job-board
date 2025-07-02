"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import apiRequest from "@/lib/apiRequest";
import { AppContext } from "@/context/AppContext";
import Spinner from "@/components/Spinner";

const JobDetails = () => {
  const { setLoading, loading } = useContext(AppContext);
  const [singleJob, setSingleJob] = useState({});
  const { id } = useParams();
  const fetchSingleJob = async () => {
    const { data } = await apiRequest.get(`/jobs/${id}`);
    if (data.success) {
      setSingleJob(data.job);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleJob();
  }, [id]);

  return (
    <main className="w-full min-h-screen bg-slate-50 py-10 px-4">
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full h-full bg-white border border-slate-200 rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-1 uppercase">
              {singleJob.title}
            </h1>
            <h3 className="text-indigo-600 text-lg font-semibold mb-4 capitalize">
              {singleJob.company}
            </h3>

            <p className="text-slate-700 mb-6">{singleJob.description}</p>

            <div className="mb-6">
              <h2 className="text-slate-900 font-semibold text-lg mb-2">
                Requirements
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                {singleJob.requirements}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-slate-900 font-semibold text-lg mb-2">
                Benefits
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                {singleJob.benefits}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-slate-900 font-semibold text-lg mb-2">
                How to Apply
              </h2>
              <p className="text-slate-700">{singleJob.application}</p>
            </div>

            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              ← Back to Jobs
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default JobDetails;
