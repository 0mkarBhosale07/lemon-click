import { connectToDatabase } from "@/db";
import Links from "@/models/links.model";
import Users from "@/models/users.model";
// import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  connectToDatabase();
  const accounts = await Users.countDocuments();
  const links = await Links.countDocuments();
  return Response.json({ accounts: accounts, links: links }); // This is a test endpoint for now
}
