import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: Implement contact form handling
  // - Validate fields (name, email, phone, business, message)
  // - Check honeypot field
  // - Rate limit
  // - Send notification email
  // - Return response

  return NextResponse.json(
    { message: "Contact form API — not yet implemented" },
    { status: 501 }
  );
}
