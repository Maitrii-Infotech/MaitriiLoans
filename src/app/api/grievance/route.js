import connectToDatabase from "@/lib/db";
import Grievance from "@/models/Grievance";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, mobile, email, loanNumber, issue } = await req.json();

    if (!name || !mobile || !email || !issue) {
      return NextResponse.json(
        { message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // 1. Check for existing active grievance (Pending or In Progress or Resolved)
    // Assuming 'Closed' means they can file a new one, strictly one active complaint.
    const existingGrievance = await Grievance.findOne({
      $or: [{ email }, { mobile }],
      status: { $nin: ["Closed"] },
    });

    if (existingGrievance) {
      return NextResponse.json(
        {
          message: `A complaint is already active for this Email or Mobile number. Complaint ID: ${existingGrievance.complaintId}`,
        },
        { status: 429 } // Rate limit / Conflict
      );
    }

    // 2. Generate Complaint ID
    // Find the latest grievance to increment ID
    const latestGrievance = await Grievance.findOne().sort({ createdAt: -1 });
    
    let nextIdNumber = 10001; // Default start
    if (latestGrievance && latestGrievance.complaintId) {
        // Extract number from MaitriiXXXXX
        const currentNumber = parseInt(latestGrievance.complaintId.replace("Maitrii", ""), 10);
        if (!isNaN(currentNumber)) {
            nextIdNumber = currentNumber + 1;
        }
    }
    
    const newComplaintId = `Maitrii${nextIdNumber}`;

    // 3. Create new Grievance
    const grievance = await Grievance.create({
      name,
      mobile,
      email,
      loanNumber,
      issue,
      complaintId: newComplaintId,
      status: "Pending"
    });

    return NextResponse.json(
      {
        message: "Complaint submitted successfully.",
        complaintId: newComplaintId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Grievance submission error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
