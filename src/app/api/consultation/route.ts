import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, businessName, industry, financingProgram, phone, email, message } = body;

    if (!fullName || !businessName || !phone || !email) {
      return NextResponse.json(
        { message: "Missing required fields (Name, Business Name, Phone, Email)." },
        { status: 400 }
      );
    }

    // In a production environment, send notification to CRM or Webhook URL if configured
    const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          businessName,
          industry,
          financingProgram,
          phone,
          email,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request recorded successfully.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Consultation route error:", error);
    return NextResponse.json(
      { message: "An error occurred while submitting your consultation request." },
      { status: 500 }
    );
  }
}
