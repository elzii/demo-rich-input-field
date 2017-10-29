import { createAction } from 'redux-actions'


import { getCurrency } from '../../services/currencies'

/**
 * Action Creators
 */
export const setFormStatus          = createAction('set form._status')

export const setFormOption          = createAction('set form.option')

export const setFormUIOption        = createAction('set form.ui.option')
export const setFormCurrency        = createAction('set form.ui.currency')

export const updateFormData         = createAction('update form.data')



export const maybeSetFormData = field => (dispatch, getState) => {

  const { data } = getState().form
  const { id, value } = field

  let fieldExists = data && !!Object.entries(data).find(([k,v]) => k === id)

  if ( !fieldExists ) {
    dispatch(updateFormData({ [id]: value }))
  }

}


export const setCurrency = (countryCode) => dispatch => {

  const { name, symbol, decimal_digits, rounding } = getCurrency(countryCode)

  dispatch(setFormCurrency({
    name,
    symbol,
    code: countryCode,
    decimal_digits,
    rounding
  }))

}