import currencies from './currencies.json'
import supportedCurrencies from './stripe-supported-currency-map.json'

export const getCurrency = (code) => {
  let match = currencies.find(o => o.code === code)
  return match ? match : {
    code: code,
    name: null,
    symbol: code
  }
}

export const getSymbolFromCurrency = (code) => {
  let match = currencies.find(o => o.code === code)
  return match ? match.symbol : code
}

export const getNativeSymbolFromCurrency = (code) => {
  let match = currencies.find(o => o.code === code)
  return match ? match.symbol_native : code
}

export {
  currencies,
  supportedCurrencies
}