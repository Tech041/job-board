import { connectDB } from "@/db/mongodb";
import Job from "@/models/jobs";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const job = await Job.findById(params.id);

    if (!job) {
      return Response.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true, job }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
