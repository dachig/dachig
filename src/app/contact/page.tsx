"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import gsap from "gsap";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    from: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
  }, []);
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
      setForm({
        firstName: "",
        lastName: "",
        from: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("error");
      setErrors(data.errors ?? [data.error ?? "Unknown error"]);
    }
  }

  return (
    <div id="contact" className="flex justify-center items-center ">
      <div
        ref={contentRef}
        className="flex-col flex gap-6 lg:gap-10 w-full lg:w-3xl p-3 lg:p-6 bg-background/50 lg:mb-24 mb-8 rounded-md text-lg opacity-0"
      >
        <h2 className="text-3xl text-primary-foreground !font-mono">
          Ready to work together?
        </h2>
        <div className="flex flex-col gap-4 text-secondary-foreground">
          <span>
            I&apos;d love to hear about your vision for your website. Whether
            you&apos;re starting from scratch or looking to improve an existing
            project, I&apos;m here to help you bring it to life using React.
            Tell me what you have in mind:{" "}
          </span>
          <span className="ml-4">
            {" "}
            What does your ideal website look and feel like?
          </span>
          <span className="ml-4">
            Who is it for and what do you want them to do when they visit?
          </span>
          <span className="ml-4">
            What are your business or creative goals for the site?{" "}
          </span>
          <span>
            The more I know about your ideas and aspirations, the better I can
            propose a solution that fits.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 lg:w-2xl">
          {/* 3) Name fields wrapper */}
          <div className="flex flex-wrap gap-4">
            <label className="block flex-1">
              <span className="text-accent-foreground !font-mono">
                First Name
              </span>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm((f) => ({ ...f, firstName: e.target.value }))
                }
                required
                className="w-full border px-2 py-1 rounded-md text-secondary-foreground mt-2 bg-background"
              />
            </label>
            <label className="block flex-1">
              <span className="text-accent-foreground !font-mono">
                Last Name
              </span>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) =>
                  setForm((f) => ({ ...f, lastName: e.target.value }))
                }
                required
                className="w-full border px-2 py-1 rounded-md text-secondary-foreground mt-2 bg-background"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-accent-foreground !font-mono">
              Your Email
            </span>
            <input
              type="email"
              value={form.from}
              onChange={(e) => setForm((f) => ({ ...f, from: e.target.value }))}
              required
              className="w-full border px-2 py-1 rounded-md text-secondary-foreground mt-2 bg-background"
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
              className="w-full border px-2 py-1 rounded-md text-secondary-foreground mt-2 bg-background"
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
              className="w-full border px-2 py-1 rounded-md text-secondary-foreground mt-2 bg-background"
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
