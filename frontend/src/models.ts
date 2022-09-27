export interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export interface UserDetails extends User {
  email: string;
  favourites: string[];
}
