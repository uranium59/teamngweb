
import { createI18n } from 'vue-i18n'

import ko from '../locale/ko.json'

const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  } else {
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  }
}

const defaultLocale = getNavigatorLanguage().split(/-|_/)[0]

const i18n = createI18n({
  fallbackLocale: 'ko',
  locale: defaultLocale,
  legacy: false,
  messages: {
    ko,
  }
})

export {
  i18n
}