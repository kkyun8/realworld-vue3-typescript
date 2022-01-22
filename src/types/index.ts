import { ILogin, IRegister, IUser } from "@/types/user";

export interface RootState {
  common: ICommonState;
  user: IUserState;
}

export interface ICommonState {
  isLoading: boolean;
  hasError: boolean;
  messages: string[];
}

export interface IUserState {
  register: IRegister;
  login: ILogin;
  loginUser: IUser;
}
