import { connectDB } from "@/db/mongodb";
import Job from "@/models/jobs";

export async function GET() {
  try {
    await connectDB();
    const allJobs = await Job.find({});
    return Response.json({ success: true, allJobs }, { status: 200 });
  } catch (error) {
    console.log(error)
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
