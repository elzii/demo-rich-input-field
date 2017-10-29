import * as actions from './actions'
import { status } from '../../constants'

const initialState = {
  _status: status.IDLE,

  // Store for responses from plaid/stripe/etc
  data: {},

  // UI options, toggles, etc
  ui: {
    donationFrequencySuffix: null,

    currency: {
      activeCurrencySymbol: '$',
      activeCurrencyCode: 'USD',
      activeCurrencyName: 'US Dollar',
    },

    displayToggle: {
      currencyDropdown: false,
    },
  },
}

export default function(state = initialState, action = null) {
  switch (action.type) {

    case actions.setFormUIOption().type:
      return {
        ...state,
        ui: {
          ...state.ui,
          ...action.payload,
        },
      }

    case actions.setFormCurrency().type:
      return {
        ...state,
        ui: {
          ...state.ui,
          currency: {
            ...state.ui.currency,
            activeCurrencyCode: action.payload.code,
            activeCurrencySymbol: action.payload.symbol,
            activeCurrencyName: action.payload.name,
          },
        },
      }

    case actions.updateFormData().type:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      }

    case actions.setFormOption().type:
      return {
        ...state,
        ...action.payload,
      }


    default:
      return state
  }
}
