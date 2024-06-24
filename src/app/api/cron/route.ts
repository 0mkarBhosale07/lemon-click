import { NextResponse } from "next/server";
import checkAndUpdatePlanExpiry from "@/actions/checkPlanExpiry";

export async function GET() {
  const result = "Helo, World! This is CRON route.";
  const data = await checkAndUpdatePlanExpiry(); // Call the function to update plan expiry status
  console.log("Cron job executed successfully"); // Log a message indicating successful execution of the cron job

  return NextResponse.json({ data: result });
}
