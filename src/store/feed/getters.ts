import { GetterTree } from "vuex";
import { IFeedState, RootState } from "@/types";

const getters: GetterTree<IFeedState, RootState> = {
  feedType: (state: IFeedState): string => {
    const { userId, tagId } = state.feedParams;
    let type = "global";
    if (userId !== 0 || tagId !== 0) {
      type = userId !== 0 ? "user" : "tag";
    }
    return type;
  },
  feedParamsTagName: (state: IFeedState, getter, rootState: RootState): string => {
    const tagId = state.feedParams.tagId || 0;
    const tag = rootState.tag.tagList.find((t) => t.id === tagId);
    return tag?.name || "";
  },
};

export default getters;
