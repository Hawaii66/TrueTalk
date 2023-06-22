import { AuthResponse, PostgrestSingleResponse } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const IsAuthError = (data: AuthResponse) => {
  if (data.error) {
    return {
      error: NextResponse.json(
        {
          error: data.error,
        },
        { status: 500 }
      ),
    };
  }

  return {
    data: data.data,
  };
};

export const IsError = <T>(data: PostgrestSingleResponse<T>) => {
  if (data.error) {
    return {
      error: NextResponse.json(
        {
          error: data.error,
        },
        { status: 500 }
      ),
    };
  }

  return {
    data: data.data,
  };
};

export const ReturnIfError = <T>(
  data: PostgrestSingleResponse<T>,
  callback: (data: T) => void
) => {
  if (data.error) {
    return NextResponse.json(
      {
        error: data.error,
      },
      { status: 500 }
    );
  }

  callback(data.data);
};
