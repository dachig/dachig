import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  from: z.string().email("A valid email is required"),
  subject: z.string().nonempty("Subject cannot be empty"),
  message: z.string().min(25, "Message must be at least 25 characters"),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();

    const { firstName, lastName, from, subject, message } =
      ContactSchema.parse(json);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formattedFrom = `"${firstName} ${lastName}" <${from}>`;
    const augmentedSubject = `${subject} (from: ${firstName} ${lastName})`;

    await transporter.sendMail({
      from: formattedFrom,
      to: process.env.MY_EMAIL,
      subject: augmentedSubject,
      text: `Sender Name: ${firstName} ${lastName}\nSender Email: ${from}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { success: false, errors: err.errors.map((e: any) => e.message) },
        { status: 400 }
      );
    }
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
