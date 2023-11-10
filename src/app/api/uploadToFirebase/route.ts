import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { uploadFileToFirebase } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const {noteId} = await req.json();
    const notes = await db.select().from($notes).where(eq($notes.id, Number(noteId)));
    if (!notes[0].imageUrl){
      return new NextResponse("No image url", { status: 400 });
    }
    
    const firebase_url = await uploadFileToFirebase(notes[0].imageUrl, notes[0].name);
    
    await db.update($notes).set({
      imageUrl: firebase_url
    }).where(eq($notes.id, Number(noteId)));
    
    return new NextResponse("ok", { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("error", { status: 500 });
  }
}