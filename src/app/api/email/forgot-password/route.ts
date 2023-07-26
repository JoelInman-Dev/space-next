import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/emails";
import { SHA1 } from "crypto-js";

import ForgotPasswordEmail from "@/emails/ForgotPasswordEmail";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email } = await request.json();

  const encryptedEmail: string = SHA1(email).toString();
  // TODO:: change this to the actual URL from environment variables
  const resetLink: string =
    "http://localhost:3000/reset-password?e=" + encryptedEmail;

  await sendEmail({
    to: email,
    subject: "SpaceNext | Reset Password",
    html: render(
      ForgotPasswordEmail({
        email,
        resetLink,
      })
    ),
  });

  return NextResponse.json({
    status: "Ok",
  });
}
