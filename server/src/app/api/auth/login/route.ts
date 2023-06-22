import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(requset: NextRequest) {
  const body = await requset.json();

  const email = body.email;
  const password = body.password;

  const supabase = createServerClient();
  const authed = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log(authed);
  if (authed.error) {
    return NextResponse.json(
      {
        error: "Login",
      },
      {
        status: 400,
      }
    );
  }

  const token = jwt.sign(
    {
      email: authed.data.user.email,
      id: authed.data.user.id,
    },
    process.env.JWT_SECRET || ""
  );

  return NextResponse.json({
    token,
  });
}
