"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Contact() {
  const [form, setForm] = useState({ from: "", subject: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors([]);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok && data.success) {
      setStatus("success");
      setForm({ from: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setErrors(data.errors ?? [data.error ?? "Unknown error"]);
    }
  }

  return (
    <div
      id="contact"
      className="lg:w-screen lg:h-screen flex justify-center items-center"
    >
      <div className="flex-col flex gap-6 lg:gap-10 w-full lg:w-fit">
        <h2 className="text-3xl text-primary-foreground !font-mono">
          <span className="text-accent-foreground text-xl mr-4">04.</span>
          Contact me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 lg:w-2xl ">
          <label className="block">
            <span className="text-accent-foreground !font-mono">
              Your Email
            </span>
            <input
              type="email"
              value={form.from}
              onChange={(e) => setForm((f) => ({ ...f, from: e.target.value }))}
              required
              className="w-full border px-2 py-1 rounded-md text-primary-foreground"
            />
          </label>

          <label className="block">
            <span className="text-accent-foreground !font-mono">Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={(e) =>
                setForm((f) => ({ ...f, subject: e.target.value }))
              }
              required
              className="w-full border px-2 py-1 rounded-md text-primary-foreground"
            />
          </label>

          <label className="block">
            <span className="text-accent-foreground !font-mono">Message</span>
            <textarea
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              rows={6}
              minLength={25}
              required
              className="w-full border px-2 py-1 rounded-md text-primary-foreground"
            />
          </label>

          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-accent-foreground !font-mono">
            Thanks for your message! I&apos;ll be in touch very soon.
          </p>
        )}
        {status === "error" && errors.length > 0 && (
          <div className="text-destructive !font-mono">
            <p>Something went wrong! Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
