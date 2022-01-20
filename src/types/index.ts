import { IRegister } from "@/types/user";

export interface IState {
  user: IUserState;
}

export interface IUserState {
  register: IRegister;
}
