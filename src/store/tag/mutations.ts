import { MutationTree } from "vuex";
import { ITagState } from "@/types";
import { ITag } from "@/types/tag";

const mutations: MutationTree<ITagState> = {
  setTag(state: ITagState, tag: ITag): void {
    state.tag = tag;
  },
  setTagList(state: ITagState, tagList: ITag[]): void {
    state.tagList = tagList;
  },
};

export default mutations;
