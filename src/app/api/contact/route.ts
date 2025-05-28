import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  from: z.string().email(),
  subject: z.string().nonempty(),
  message: z.string().min(25),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { from, subject, message } = ContactSchema.parse(json);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const augmentedSubject = `${subject} (from: ${from})`;

    await transporter.sendMail({
      from,
      to: process.env.MY_EMAIL,
      subject: augmentedSubject,
      text: `Sender: ${from}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    // Zod validation errors
    if (err.name === "ZodError") {
      return NextResponse.json(
        { success: false, errors: err.errors.map((e: any) => e.message) },
        { status: 400 }
      );
    }
    // Nodemailer or other errors
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
