import connectToDatabase from "@/lib/db";
import Grievance from "@/models/Grievance";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search") || "";
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);
        const skip = (page - 1) * limit;

        const query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { complaintId: { $regex: search, $options: "i" } },
                { mobile: { $regex: search, $options: "i" } },
            ];
        }

        if (startDate || endDate) {
            query.createdAt = {};
            if (startDate) {
                query.createdAt.$gte = new Date(startDate);
            }
            if (endDate) {
                // Set end date to end of day
                const end = new Date(endDate);
                end.setHours(23, 59, 59, 999);
                query.createdAt.$lte = end;
            }
        }

        const [grievances, total] = await Promise.all([
            Grievance.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),
            Grievance.countDocuments(query),
        ]);

        return NextResponse.json({
            grievances,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / limit),
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Fetch Grievances Error:", error);
        return NextResponse.json({ message: "Error fetching grievances" }, { status: 500 });
    }
}
