import { NextRequest, NextResponse } from "next/server";
import * as jwt from "jose";

export async function middleware(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  const secret = process.env.JWT_SECRET || "";

  if (token === null) {
    return NextResponse.json(
      {
        error: "No token",
      },
      {
        status: 400,
      }
    );
  }

  const secretEncoded = new TextEncoder().encode(secret);

  try {
    const { payload } = await jwt.jwtVerify(token, secretEncoded);

    if (payload != null) {
      if (typeof payload.email !== "string" || typeof payload.id !== "string") {
        return NextResponse.json(
          {
            error: "No email, id",
          },
          {
            status: 403,
          }
        );
      }

      return NextResponse.next({
        headers: {
          email: payload.email,
          id: payload.id,
        },
      });
    }
  } catch (e: any) {
    return NextResponse.json(
      {
        error: "Wrong token",
      },
      {
        status: 401,
      }
    );
  }
}

export const config = {
  matcher: "/api/authed/:path*",
};
