"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please add a little more detail (10+ characters).";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Honeypot spam protection: real users leave this empty.
    if (String(data.get("company") || "")) return;

    if (!endpoint) {
      // No real backend connected yet — be honest, do not fake a send.
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted/60 focus-visible:border-primary";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">Message</label>
        <textarea id="message" name="message" rows={5} className={inputClass}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-error">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-sm text-success">Thanks — your message was sent. I’ll get back to you soon.</p>
        )}
        {status === "error" && !endpoint && (
          <p className="text-sm text-warning">
            The contact form backend isn’t connected yet. Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT, or reach out directly once contact links are added.
          </p>
        )}
        {status === "error" && endpoint && (
          <p className="text-sm text-error">Something went wrong sending your message. Please try again.</p>
        )}
      </div>
    </form>
  );
}
