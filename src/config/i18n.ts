import { createI18n } from "vue-i18n";

export default createI18n({
  locale: "ja",
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "hello!",
    },
    ja: {
      hello: "こんにちは！",
    },
    kr: {
      hello: "안녕하세요!",
    },
  },
});
