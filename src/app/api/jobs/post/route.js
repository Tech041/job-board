import { connectDB } from "@/db/mongodb";
import Job from "@/models/jobs";

export async function POST(request) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      company,
      jobType,
      salary,
      requirements,
      benefits,
      application,
    } = await request.json();

    if (
      !title ||
      !description ||
      !company ||
      !location ||
      !jobType ||
      !salary ||
      !requirements ||
      !benefits ||
      !application
    ) {
      return Response.json(
        { success: false, message: "Missing details" },
        { status: 400 }
      );
    }

    const newJob = await Job.create({
      title,
      description,
      company,
      location,
      jobType,
      salary,
      requirements,
      benefits,
      application,
    });

    return Response.json(
      { success: true, newJob, message: "Posted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
