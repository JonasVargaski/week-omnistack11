function setLocale(lang) {
  window.sessionStorage.setItem('user_language', lang);
  document.querySelector('html').setAttribute('lang', lang);
}

export function loadLanguage(lang) {
  setLocale(lang);
  return new Promise((resolve, reject) => {
    return import(/* webpackChunkName: "lang-[request]" */ `./${lang}`).then(msgs => {
      resolve(msgs.default)
    }, (err) => {
      reject('Error loading translations', err)
    })
  })
};