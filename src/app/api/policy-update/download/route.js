import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import PolicyUpdate from "@/models/PolicyUpdate";

export async function GET(req) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    let policy;

    if (id) {
        // Fetch specific policy (Admin preview)
        policy = await PolicyUpdate.findById(id);
    } else {
        // Default: Fetch latest ENABLED policy (Public view)
        policy = await PolicyUpdate.findOne({ isEnabled: true }).sort({ updatedAt: -1 });
    }
    
    if (!policy || !policy.pdfData) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    // Check expiry ONLY for public view (no ID param)
    if (!id && policy.expiryDate && new Date() > new Date(policy.expiryDate)) {
      return NextResponse.json({ error: "Policy expired" }, { status: 410 });
    }

    // Convert Base64 to Buffer
    const pdfBuffer = Buffer.from(policy.pdfData, 'base64');
    
    // Return as downloadable PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${policy.pdfName || 'policy.pdf'}"`, // Changed to inline for browser preview
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'public, s-maxage=43200'
      }
    });
  } catch (error) {
    console.error("PDF Download Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
