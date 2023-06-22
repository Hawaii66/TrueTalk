import { sid } from "./Id";

export interface User {
  name: string;
  username: string;
  age: number;
  email: string;
  id: sid;
}
