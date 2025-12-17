import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import PolicyUpdate from "@/models/PolicyUpdate";
import User from "@/models/User";
import { cookies } from "next/headers";
import Session from "@/models/Session";

// Helper to verify superadmin
async function verifySuperadmin() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('session_token')?.value;
    if (!sessionToken) return null;

    const session = await Session.findOne({ token: sessionToken, expiresAt: { $gt: new Date() } });
    if (!session) return null;

    const user = await User.findById(session.userId);
    if (!user || user.role !== 'superadmin') return null;

    return user;
  } catch (error) {
    console.error("verifySuperadmin error:", error);
    return null;
  }
}

// GET - Fetch ALL policies (History)
export async function GET() {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Return list sorted by newest first
    const policies = await PolicyUpdate.find().sort({ createdAt: -1 });
    
    // Check expiry for each
    const policiesWithStatus = policies.map(p => ({
        ...p.toObject(),
        isExpired: p.expiryDate && new Date() > new Date(p.expiryDate)
    }));
    
    return NextResponse.json({ policies: policiesWithStatus }, { status: 200 });
  } catch (error) {
    console.error("Admin Policy Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST - Create NEW policy
export async function POST(req) {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, type, pdfData, pdfName, url, isEnabled, expiryDate } = await req.json();

    if (!type) {
      return NextResponse.json({ error: "Type is required" }, { status: 400 });
    }

    // Validate based on type
    if (type === 'pdf' && !pdfData) {
      return NextResponse.json({ error: "PDF file is required" }, { status: 400 });
    }
    if (type === 'link' && !url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Build create object
    const newPolicyData = {
      title: title || 'Policy Update',
      type,
      isEnabled: isEnabled ?? false,
      expiryDate: expiryDate ? new Date(expiryDate) : null
    };

    if (type === 'pdf') {
      newPolicyData.pdfData = pdfData;
      newPolicyData.pdfName = pdfName || 'policy.pdf';
    } else {
      newPolicyData.url = url;
    }

    const policy = await PolicyUpdate.create(newPolicyData);

    return NextResponse.json({ policy, message: "Policy created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Admin Policy Create Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// PUT - Update specific policy (Toggle enable/disable, etc)
export async function PUT(req) {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, isEnabled, title, expiryDate } = await req.json();
    
    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Construct update payload (only update provided fields)
    const updateData = {};
    if (isEnabled !== undefined) updateData.isEnabled = isEnabled;
    if (title !== undefined) updateData.title = title;
    if (expiryDate !== undefined) updateData.expiryDate = expiryDate;

    const policy = await PolicyUpdate.findByIdAndUpdate(
        id, 
        updateData, 
        { new: true }
    );

    if (!policy) {
        return NextResponse.json({ error: "Policy not found" }, { status: 404 });
    }

    return NextResponse.json({ policy, message: "Policy updated successfully" }, { status: 200 });
  } catch (error) {
      console.error("Admin Policy Update Error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE - Delete specific policy
export async function DELETE(req) {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Policy ID is required" }, { status: 400 });
    }

    await PolicyUpdate.findByIdAndDelete(id);
    
    return NextResponse.json({ message: "Policy deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Admin Policy Delete Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

