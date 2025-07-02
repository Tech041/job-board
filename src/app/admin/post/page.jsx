"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequest from "@/lib/apiRequest";
import { AppContext } from "@/context/AppContext";

// Define form schema
const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  location: z.string().min(1, { message: "Location is required" }),
  jobType: z.enum(["full-time", "part-time", "contract", "internship"]),

  salary: z.string().min(1, { message: "Salary is required" }),
  requirements: z.string().min(1, { message: "Requirements is required" }),
  benefits: z.string().min(1, { message: "Benefit is required" }),
  application: z.string().min(1, { message: "Application is required" }),
});

const AdminJobForm = () => {
  const { fetchAllJobs } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (formData) => {
    console.log("Payload sent is ", formData);
    const { data } = await apiRequest.post("/jobs/post", formData);
    if (data.success) {
      reset();
      fetchAllJobs();
      
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="container">
        <div className="w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-xl border border-slate-200 rounded-md shadow-md p-6 space-y-5"
          >
            <h2 className="text-2xl text-center font-bold text-indigo-700 mb-2">
              Post a New Job
            </h2>

            {/* Title */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Job Title
              </label>
              <input
                {...register("title")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. UI/UX Designer"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Company Name
              </label>
              <input
                {...register("company")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. Paystack"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Job Description
              </label>
              <textarea
                {...register("description")}
                rows={5}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="Describe the role, responsibilities, and expectations..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* Requirements */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Requirements
              </label>
              <textarea
                {...register("requirements")}
                rows={5}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="Skills and Qualifications ..."
              />
              {errors.requirements && (
                <p className="text-red-500 text-sm">
                  {errors.requirements.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Location
              </label>
              <input
                {...register("location")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. Remote, Lagos, Abuja"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>
            {/* Benefits */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Benefits
              </label>
              <input
                {...register("benefits")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. holidays , stipends "
              />
              {errors.benefits && (
                <p className="text-red-500 text-sm">
                  {errors.benefits.message}
                </p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Job Type
              </label>
              <select
                {...register("jobType")}
                className="w-full border border-slate-300 rounded px-3 py-2"
              >
                <option value="">Select Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
              {errors.jobType && (
                <p className="text-red-500 text-sm">{errors.jobType.message}</p>
              )}
            </div>

            {/* Salary */}
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                Salary (NGN)
              </label>
              <input
                {...register("salary")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. ₦500,000 - ₦700,000"
              />
              {errors.salary && (
                <p className="text-red-500 text-sm">{errors.salary.message}</p>
              )}
            </div>
            {/* Application */}

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                How to Apply
              </label>
              <input
                {...register("application")}
                className="w-full border border-slate-300 rounded px-3 py-2"
                placeholder="e.g. Link or Email "
              />
              {errors.application && (
                <p className="text-red-500 text-sm">
                  {errors.application.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full font-semibold"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminJobForm;
