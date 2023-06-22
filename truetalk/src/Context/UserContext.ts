import { Session } from "@supabase/supabase-js";
import { createContext } from "react";
import { User } from "../Interfaces/User";

export interface IUserContext {
  user: User | null;
  token: string;
  setToken: (t: string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  token: "",
  setToken: () => {},
});
