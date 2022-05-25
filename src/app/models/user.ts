import {Score} from "./score";

export class User {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  username: string;
  scores: Score[];
  dateJoined: Date;
}
