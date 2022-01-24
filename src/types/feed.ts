import { IPagination } from "./common";
import { IUser } from "./user";

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

export interface ITag {
  id: number;
  name: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IFeedParams extends IPagination {
  tagId?: number;
  userId?: number;
}
