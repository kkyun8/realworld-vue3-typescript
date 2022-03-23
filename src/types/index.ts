import { ILogin, IRegister, IUser, IProfile } from "@/types/user";
import { IArticle, IFeedParams, IComment } from "./feed";
import { ITag } from "./tag";

export interface RootState {
  common: ICommonState;
  user: IUserState;
  feed: IFeedState;
  tag: ITagState;
}

export interface ICommonState {
  isLoading: boolean;
  hasError: boolean;
  messages: string[];
  t?: any;
}

export interface IUserState {
  register: IRegister;
  login: ILogin;
  loginUser: IUser;
  profile: IProfile;
}

export interface IFeedState {
  article: IArticle;
  articleList: IArticle[];
  comment: IComment;
  feedParams: IFeedParams;
}

export interface ITagState {
  tag: ITag;
  tagList: ITag[];
}
