import connectToDatabase from "@/lib/db";
import Grievance from "@/models/Grievance";
import Notification from "@/models/Notification";
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

    const existingGrievance = await Grievance.findOne({
      $or: [{ email }, { mobile }],
      status: { $nin: ["Closed"] },
    });

    if (existingGrievance) {
      return NextResponse.json(
        {
          message: `A complaint is already active for this Email or Mobile number. Complaint ID: ${existingGrievance.complaintId}`,
        },
        { status: 429 }
      );
    }

    const latestGrievance = await Grievance.findOne().sort({ createdAt: -1 });
    
    let nextIdNumber = 10001;
    if (latestGrievance && latestGrievance.complaintId) {
        const currentNumber = parseInt(latestGrievance.complaintId.replace("Maitrii", ""), 10);
        if (!isNaN(currentNumber)) {
            nextIdNumber = currentNumber + 1;
        }
    }
    
    const newComplaintId = `Maitrii${nextIdNumber}`;

    const grievance = await Grievance.create({
      name,
      mobile,
      email,
      loanNumber,
      issue,
      complaintId: newComplaintId,
      status: "Pending"
    });

    try {
      await Notification.create({
        message: `New Grievance Received: ${newComplaintId} from ${name}`,
        type: 'grievance',
        targetPermissions: ['admin', 'superadmin'],
        link: '/admin/dashboard?tab=grievance'
      });
    } catch (notifError) {
      console.error("Failed to create notification", notifError);
    }

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
