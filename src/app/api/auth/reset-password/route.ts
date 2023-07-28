import { NextRequest, NextResponse } from "next/server";
import * as AuthService from "@/services/Auth-Service";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { encryptedEmail, newPassword } = await request.json();
  const credentials = { encryptedEmail, newPassword };
  const res = await AuthService.resetPassword(credentials);
  console.log("reset password response: ", res);
  return NextResponse.json({
    status: "Ok",
    message: "Password updated successfully",
  });
}
