import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { IsAuthError, IsError } from "@/Functions/SupabaseError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");
  const password = searchParams.get("password");

  if (!email || !password) {
    return NextResponse.json(
      {
        error: "Missing properties",
      },
      {
        status: 400,
      }
    );
  }

  const supabase = createServerClient();
  const query = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  const { data, error } = IsAuthError(query);
  if (error) {
    return error;
  }

  const token = jwt.sign(
    {
      email: email,
      id: data.user?.id,
    },
    process.env.JWT_SECRET || ""
  );

  return NextResponse.json({
    token,
  });
};
