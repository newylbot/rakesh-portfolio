"use client";

import * as React from "react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const inputClass =
  "w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const email = siteConfig.person.email;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this.
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const mail = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name) next.name = "Please enter your name.";
    if (!mail) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) next.email = "Please enter a valid email.";
    if (!message) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: mail, message }),
      });
      if (res.status === 501) {
        setStatus("unconfigured");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot field — visually hidden, ignored by humans. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-error">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-error">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={inputClass} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-error">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending\u2026" : "Send message"}
        </Button>
        <span aria-live="polite" className="text-sm">
          {status === "success" ? <span className="text-success">Thanks — your message was sent.</span> : null}
          {status === "error" ? <span className="text-error">Something went wrong. Please try again.</span> : null}
        </span>
      </div>

      {status === "unconfigured" ? (
        <p className="rounded-md border border-border bg-surface-2 p-3 text-sm text-text-muted">
          Messaging isn{"\u2019"}t wired up yet.{" "}
          {email ? (
            <>
              Please email me directly at{" "}
              <a href={`mailto:${email}`} className="text-primary underline">{email}</a>.
            </>
          ) : (
            <>Add a real email or CONTACT_FORM_ENDPOINT to enable this form.</>
          )}
        </p>
      ) : null}
    </form>
  );
}
