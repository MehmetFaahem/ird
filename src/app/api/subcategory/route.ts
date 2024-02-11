export const dynamic = "force-dynamic"; // defaults to auto
import { NextResponse } from "next/server";
import { openDb } from "../db";

export async function GET(request: Request) {
  const db = await openDb();
  const sub = await db.all("SELECT * FROM sub_category");
  return NextResponse.json({ sub });
}
