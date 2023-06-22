import { createServerClient } from "@/Functions/CreateSupabaseServer";
import { GetID } from "@/Functions/GetID";
import { AuthedRequest } from "@/Interfaces/AuthedRequest";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: AuthedRequest) {
  const { email, id } = GetID(request);

  return NextResponse.json({
    email,
    id,
  });
}
