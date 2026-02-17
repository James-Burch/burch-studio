import { NextResponse } from "next/server";
import { Resend } from "resend";

// ==========================================
// CONFIG
// ==========================================

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL || "contact@burchstudio.co.uk";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Burch Studio <noreply@burch-studio.co.uk>";

// ==========================================
// RATE LIMITING (in-memory, per-IP)
// ==========================================

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// ==========================================
// VALIDATION
// ==========================================

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validate(body: unknown): {
  data?: ContactPayload;
  errors?: ValidationError[];
} {
  if (!body || typeof body !== "object") {
    return { errors: [{ field: "body", message: "Invalid request body" }] };
  }

  const { name, email, phone, business, message } = body as Record<
    string,
    unknown
  >;
  const errors: ValidationError[] = [];

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters",
    });
  }

  if (
    typeof email !== "string" ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.push({
      field: "email",
      message: "A valid email address is required",
    });
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    });
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    data: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      business: typeof business === "string" ? business.trim() : undefined,
      message: (message as string).trim(),
    },
  };
}

// ==========================================
// ROUTE HANDLER
// ==========================================

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    // Honeypot check — if this field has a value, it's a bot
    if (body && typeof body === "object" && "honeypot" in body) {
      const honeypot = (body as Record<string, unknown>).honeypot;
      if (typeof honeypot === "string" && honeypot.length > 0) {
        // Silently accept — don't reveal the trap
        return NextResponse.json({ success: true }, { status: 200 });
      }
    }

    // Validate
    const { data, errors } = validate(body);

    if (errors) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    if (!data) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Send notification email to Burch Studio
    const { error: notificationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New enquiry from ${data.name}`,
      replyTo: data.email,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : null,
        data.business ? `Business: ${data.business}` : null,
        ``,
        `Message:`,
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (notificationError) {
      console.error("Failed to send notification email:", notificationError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    // Send auto-reply to customer
    const { error: replyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Thanks for getting in touch — Burch Studio",
      text: [
        `Hi ${data.name},`,
        ``,
        `Thanks for reaching out to Burch Studio. We've received your message and will get back to you within 24 hours.`,
        ``,
        `In the meantime, if you have anything urgent, you can reach us at contact@burchstudio.co.uk.`,
        ``,
        `Speak soon,`,
        `Burch Studio`,
        `burch-studio.co.uk`,
      ].join("\n"),
    });

    if (replyError) {
      // Log but don't fail — the notification was sent successfully
      console.error("Failed to send auto-reply:", replyError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
