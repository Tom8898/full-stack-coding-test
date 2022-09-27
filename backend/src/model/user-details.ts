import { User } from "./user";

export interface UserDetails extends User {
    email: string;
    favourites: string[];
}
