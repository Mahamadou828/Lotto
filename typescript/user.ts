export interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type ConnectUser = Pick<IUser, "email" | "password">;

export interface IAuth {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: null | IUser;
}
