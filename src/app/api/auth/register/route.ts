import { NextRequest, NextResponse } from "next/server";
import * as AuthService from "@/services/Auth-Service";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { username, name, email, password } = await request.json();

  const res = await AuthService.registerAccount(
    username,
    name,
    email,
    password
  );
  console.log("register account response: ", res);
  return NextResponse.json({
    status: "Ok",
    message: "Account Created successfully",
  });
}
