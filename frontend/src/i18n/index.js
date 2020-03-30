export function loadLanguage(lang) {
  return new Promise((resolve, reject) => {
    return import(/* webpackChunkName: "lang-[request]" */ `./${lang}`).then(msgs => {
      resolve(msgs.default)
    }, (err) => {
      reject('Error loading translations', err)
    })
  })
};