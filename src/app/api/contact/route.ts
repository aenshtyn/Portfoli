import { NextResponse } from "next/server";

function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, intent, origin } = body ?? {};

    if (
      typeof name !== "string" ||
      !isValidEmail(email) ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid submission. Please review required fields." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: String(email).trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      intent: typeof intent === "string" ? intent.trim() : "unspecified",
      origin: typeof origin === "string" ? origin : null,
      receivedAt: new Date().toISOString(),
    };

    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error("Failed to push contact payload", error);
      }
    }

    console.log("New contact submission", payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}
