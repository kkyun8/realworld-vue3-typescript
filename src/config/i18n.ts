import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      signUp: "Sign up",
      haveAnAccount: "Have an account?",
      signIn: "Sign in",
      needAnAccount: "Need an account?",
    },
    ja: {
      signUp: "会員登録",
      haveAnAccount: "すでに登録ずみですか？",
      signIn: "ログイン",
      needAnAccount: "会員登録が必要ですか？",
    },
    kr: {
      signUp: "회원가입",
      haveAnAccount: "이미 등록되었습니까?",
      signIn: "로그인",
      needAnAccount: "회원가입이 필요합니까?",
    },
  },
});
