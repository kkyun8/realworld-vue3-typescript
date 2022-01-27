import { IPagination } from "./common";
import { IUser } from "./user";
import { ITag } from "./tag";
export interface IArticle {
  title: string;
  body: string;
  description: null | string;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
  tags?: ITag[];
  user?: IUser;
}
export interface IFeedParams extends IPagination {
  tagId?: number;
  userId?: number;
}
