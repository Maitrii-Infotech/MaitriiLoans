import connectToDatabase from "@/lib/db";
import Grievance from "@/models/Grievance";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDatabase();

    const now = new Date();
    const todayStart = new Date(now.setHours(0, 0, 0, 0));
    
    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    const yesterdayEnd = new Date(todayStart);

    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const stats = await Grievance.aggregate([
      {
        $facet: {
          today: [{ $match: { createdAt: { $gte: todayStart } } }, { $count: "count" }],
          yesterday: [{ $match: { createdAt: { $gte: yesterdayStart, $lt: yesterdayEnd } } }, { $count: "count" }],
          thisMonth: [{ $match: { createdAt: { $gte: monthStart } } }, { $count: "count" }],
          total: [{ $count: "count" }]
        }
      }
    ]);

    const result = {
      today: stats[0].today[0]?.count || 0,
      yesterday: stats[0].yesterday[0]?.count || 0,
      thisMonth: stats[0].thisMonth[0]?.count || 0,
      total: stats[0].total[0]?.count || 0,
    };

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("Stats API Error:", error);
    return NextResponse.json({ message: "Error fetching stats" }, { status: 500 });
  }
}
