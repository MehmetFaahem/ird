export const dynamic = "force-dynamic"; // defaults to auto
import { NextResponse } from "next/server";
import { openDb } from "./db";

export async function GET(request: Request) {
  const db = await openDb();
  const posts = await db.all("SELECT * FROM category");
  return NextResponse.json({ posts });
}
