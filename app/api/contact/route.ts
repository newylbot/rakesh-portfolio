import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 * - Forwards to CONTACT_FORM_ENDPOINT when configured.
 * - Returns 501 (not implemented) when no backend is set, so the UI can ask
 *   visitors to email directly instead of faking a submission.
 */
export async function POST(request: Request) {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  let payload: { name?: string; email?: string; message?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, email, message } = payload ?? {};
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!endpoint) {
    return NextResponse.json({ error: "Contact endpoint not configured." }, { status: 501 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  }
}
