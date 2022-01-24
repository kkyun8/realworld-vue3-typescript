import { MutationTree } from "vuex";
import { IFeedState } from "@/types";
import { IArticle, IFeedParams } from "@/types/feed";

const mutations: MutationTree<IFeedState> = {
  setArticle(state: IFeedState, value: IArticle): void {
    state.article = value;
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
};

export default mutations;
