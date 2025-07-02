"use client";
import JobCard from "@/components/JobCard";
import Spinner from "@/components/Spinner";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect, } from "react";

const Home = () => {
  const { loading, allJobs, listed, search, setSearch, setListed } =
    useContext(AppContext);

  const filteredPost = async () => {
    let postCopy = !loading && allJobs.slice();
    if (search) {
      postCopy = postCopy.filter(
        (item) =>
          item.company.toLowerCase().includes(search.toLowerCase()) ||
          item.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    setListed(postCopy);
  };
  useEffect(() => {
    filteredPost();
  }, [search, allJobs]);
  return (
    <main className="w-full min-h-screen bg-slate-50 p-8 flex justify-center items-start">
      <div className="container">
        <div className="w-full flex items-center justify-center my-4">
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by location/company"
              className="w-full p-2 rounded-md border"
            />
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listed &&
              listed.map((job) => (
                <JobCard
                  key={job._id}
                  company={job.company}
                  title={job.title}
                  location={job.location}
                  salary={job.salary}
                  detailsUrl={`/jobs/${job._id}`}
                />
              ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
