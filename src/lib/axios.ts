import axios from "axios";
import { store } from "@/store";

axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    const message = error.response?.data?.error || "has error";
    store.commit("common/setMessages", [message], { root: true });
    store.commit("common/setHasError", true, { root: true });
    return Promise.reject(error);
  }
);
export default axios;
