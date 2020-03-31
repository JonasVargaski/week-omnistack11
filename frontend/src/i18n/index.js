function setLocale(lang) {
  window.localStorage.setItem('user_language', lang);
  document.querySelector('html').setAttribute('lang', lang);
}

export function loadLanguage(lang) {
  setLocale(lang);
  return new Promise((resolve, reject) => {
    return import(/* webpackChunkName: "lang-[request]" */ `./${lang}.json`).then(msgs => {
      resolve(msgs.default)
    }, (err) => {
      reject('Error loading translations', err)
    })
  })
};

export const languages = [
  { value: 'pt-BR', label: 'Português' },
  { value: 'en-US', label: 'English' },
  { value: 'en-ES', label: 'Spanish' },
]