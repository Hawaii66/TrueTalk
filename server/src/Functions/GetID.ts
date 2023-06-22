import { NextRequest } from "next/server";

export const GetID = (requet: NextRequest) => {
  return {
    email: requet.headers.get("email"),
    id: requet.headers.get("id"),
  };
};
