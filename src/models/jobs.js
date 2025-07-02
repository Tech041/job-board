import mongoose from "mongoose";
import { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "contract", "internship"],
    },

    salary: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    application: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default Job;
