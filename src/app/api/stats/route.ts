import { getStats } from "@/actions/count.action";
import { connectToDatabase } from "@/db";

// import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  await connectToDatabase();
  const data = await getStats();
  return Response.json({ accounts: data?.userCount, links: data?.linkCount }); // This is a test endpoint for now
}
