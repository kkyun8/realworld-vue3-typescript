import { MutationTree } from "vuex";
import { IFeedState } from "@/types";
import { IArticle, IFeedParams } from "@/types/feed";
import { IUser } from "@/types/user";

const mutations: MutationTree<IFeedState> = {
  setArticle(state: IFeedState, value: IArticle): void {
    state.article = value;
  },
  setArticleUser(state: IFeedState, articleUser: IUser): void {
    state.article.user = articleUser;
  },
  setArticleList(state: IFeedState, value: IArticle[]): void {
    state.articleList = value;
  },
  setFeedParams(state: IFeedState, value: IFeedParams): void {
    state.feedParams = value;
  },
  setFeedParamsPage(state: IFeedState, value: number): void {
    state.feedParams.page = value;
  },
  setFeedParamsUserId(state: IFeedState, value: number): void {
    state.feedParams.userId = value;
  },
  setFeedParamsTagId(state: IFeedState, value: number): void {
    state.feedParams.tagId = value;
  },
  setFeedParamsLoginId(state: IFeedState, value: number): void {
    state.feedParams.loginId = value;
  },
  setArticleInArticleList(state: IFeedState, value: IArticle): void {
    state.articleList = state.articleList.map((a) => {
      if (a.id === value.id) {
        a = value;
      }
      return a;
    });
  },
};

export default mutations;
