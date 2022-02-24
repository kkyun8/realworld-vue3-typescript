import { IPagination } from "./common";
import { IUser } from "./user";
import { ITag } from "./tag";
export interface IArticle {
  id: number;
  title: string;
  body: string;
  description: null | string;
  userId: number;
  favoriteCount: number;
  createdAt?: string;
  updatedAt?: string;
  tags?: ITag[];
  user?: IUser;
  comment?: IComment[];
}
export interface IFeedParams extends IPagination {
  tagId?: number;
  userId?: number;
  isFavorite?: boolean;
}

export interface IComment {
  body: string;
  userId?: number;
  feedId: number;
}

export interface ICreateArtile {
  title: string;
  description: string;
  body: string;
  userId: number;
  tagList?: string[];
}
