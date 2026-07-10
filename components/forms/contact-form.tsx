"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { isReal } from "@/lib/utils";

type Status = "idle" | "error" | "success";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm({ endpointConfigured }: { endpointConfigured: boolean }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);

  const email = siteConfig.person.email;

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    // If a real backend endpoint is configured, post to it.
    if (endpointConfigured) {
      try {
        setSubmitting(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // No backend yet: fall back to a mailto draft when an email exists,
    // otherwise show an honest placeholder success state.
    if (isReal(email)) {
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
    setStatus("success");
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-text placeholder:text-text-muted/60 focus-visible:outline-2";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {!endpointConfigured ? (
        <p className="rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-text-muted">
          {isReal(email)
            ? "This form opens a pre-filled email in your mail app. A backend endpoint can be added later."
            : "Note: no contact backend or email is configured yet. Submissions are validated locally as a placeholder until CONTACT_FORM_ENDPOINT and a real email are set."}
        </p>
      ) : null}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {errors.email ? (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot spam-protection placeholder (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="primary" type="submit">
          {submitting ? "Sending…" : "Send message"}
        </Button>
        {status === "success" ? (
          <p role="status" className="text-sm text-success">
            Thanks — your message is ready to send.
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="text-sm text-error">
            Something went wrong. Please try again later.
          </p>
        ) : null}
      </div>
    </form>
  );
}
