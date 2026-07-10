import { NextResponse } from "next/server";

/**
 * Forwards contact submissions to a real backend endpoint.
 * Only active when CONTACT_FORM_ENDPOINT is set. No fake backend is used.
 */
export async function POST(request: Request) {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { error: "Contact endpoint is not configured." },
      { status: 501 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<string, string>;

  // Honeypot: silently accept and drop obvious bots.
  if (company) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) throw new Error("Upstream failed");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to deliver message." }, { status: 502 });
  }
}
