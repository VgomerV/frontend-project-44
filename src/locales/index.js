import ru from './ru.js'
import en from './en.js'

const locales = {
  ru: ru,
  en: en,
}

export default lang => locales[lang]
