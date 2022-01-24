import { ILogin, IRegister, IUser } from "@/types/user";
import { IArticle, IFeedParams } from "./feed";

export interface RootState {
  common: ICommonState;
  user: IUserState;
  feed: IFeedState;
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

export interface IFeedState {
  article: IArticle;
  articleList: IArticle[];
  feedParams: IFeedParams;
}
