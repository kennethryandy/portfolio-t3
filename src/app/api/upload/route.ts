import { type NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";
import { env } from "@/env";
import { db } from "@/server/db";
import { media } from "@/server/db/schema";
import fs from 'fs/promises';

const handler = async (req: NextRequest) => {
 try {
   await fs.readdir(join(process.cwd() + "/public/assets/projects"));
 } catch (error) {
   await fs.mkdir(join(process.cwd() + "/public/assets/projects"));
 }
 const data = await req.formData();
 const file: File | null = data.get("file") as unknown as File;
 if (!file) {
  return NextResponse.json({
   success: false,
   message: 'No file found.'
  });
 }

 const bytes = await file.arrayBuffer();
 const buffer = Buffer.from(bytes);
 try {
  const path = join(process.cwd(), 'public/assets/projects', file.name);
  await writeFile(path, buffer);
  const nameArr = file.name.split(".");
  nameArr.pop();
  const fileName = nameArr.join(".");
  const data = (await db.insert(media).values({
   fileName: file.name,
   name: fileName,
   mimeType: file.type
  }).returning())[0];
  return NextResponse.json({
   success: true,
   data
  });
 } catch (error) {
  return NextResponse.json({ message: "Something went wrong uploading the file", stack: env.NODE_ENV === "development" ? error : "💥" }, { status: 500 });
 }
}

export { handler as POST };