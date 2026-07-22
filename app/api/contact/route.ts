import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Server-side validation (never trust the client)
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Email is invalid.";
  if (message.length < 10) errors.message = "Message is too short.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const submission = {
    name,
    email,
    company: body.company?.trim() || null,
    service: body.service?.trim() || "General enquiry",
    message,
    receivedAt: new Date().toISOString(),
  };

  // ── Delivery hook ─────────────────────────────────────────────────────────
  // Wire this up to your provider of choice. For example, with Resend:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Deemat Website <noreply@deematfinancial.com>",
  //     to: "naboth.matongo@gmail.com",
  //     replyTo: submission.email,
  //     subject: `New consultation request — ${submission.name}`,
  //     text: `${submission.message}\n\nFrom: ${submission.name} <${submission.email}>` +
  //           `\nCompany: ${submission.company ?? "—"}\nInterest: ${submission.service}`,
  //   });
  //
  // Until configured, we log server-side so nothing is silently lost.
  console.info("[contact] new submission:", submission);

  return NextResponse.json(
    { ok: true, message: "Submission received." },
    { status: 200 }
  );
}
