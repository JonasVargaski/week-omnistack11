function getCurrency(locale) {
  switch (locale) {
    case 'pt-BR':
      return 'BRL';
    case 'en-US':
      return 'USD';
    case 'en-ES':
      return 'EUR';
    default:
      return '$'
  }
}

export default function formatCurrency(value, locale) {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: getCurrency(locale)
  }).format(value)
}