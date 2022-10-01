import { Gender } from "../constans";

export interface User {
  fullName: string;
  gender: Gender;
  email: string;
  birthDate: Date;
  address: string;
  city: string;
  country: string;
  hobbies?: number[]
}
