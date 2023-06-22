import { nid, sid } from "./Id";
import { User } from "./User";

export interface AnonymousAnswer {
  text: string;
  id: nid;
  likes: 0;
}

export interface Answer extends AnonymousAnswer {
  author: string;
}

export interface UserAnswer {
  text: string;
  author: User | null;
}

export interface PrivateAnswer extends AnonymousAnswer {
  author: string;
  anonymous: boolean;
}

export interface BasicUserAnswer extends AnonymousAnswer {
  author: {
    id: sid;
    username: string;
  };
}
