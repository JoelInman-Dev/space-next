import { NextRequest, NextResponse } from "next/server";
import * as AuthService from "@/services/Auth-Service";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { encrypted_email, new_password } = await request.json();

  const res = await AuthService.resetPassword(new_password, encrypted_email);

  return NextResponse.json({
    status: "Ok",
    message: "Password updated successfully",
  });
}
