import checkAndUpdatePlanExpiry from "@/actions/checkPlanExpiry";
import { connectToDatabase } from "@/db";
// import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  connectToDatabase();
  const accounts = await checkAndUpdatePlanExpiry();
  return Response.json({ message: "Payment data updated!" }); // This is a test endpoint for now
}
