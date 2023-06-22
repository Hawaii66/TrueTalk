import { NextRequest } from "next/server";
import { sid } from "./Id";

export type AuthedRequest = NextRequest & {
  headers: {
    email: string;
    id: sid;
  };
};
