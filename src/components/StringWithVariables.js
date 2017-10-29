import React from 'react'
import { connect } from 'react-redux'
import reactStringReplace from 'react-string-replace'

import CurrencySymbol from './CurrencySymbol'


const StringWithVariables = ({ string, ...props }) => {

  let componentizedString = null;

  // AMOUNT
  componentizedString = reactStringReplace(string, /\{\{(amount)\}\}/g, (match, i) => {
    const { amount } = props.data
    return <span key={match+i}>
      <CurrencySymbol />
      <span>{!amount ? 0 : amount}</span>
    </span>
  })

  // FREQUENCY
  componentizedString = reactStringReplace(componentizedString, /\{\{(frequency)\}\}/g, (match, i) => {
    const { frequency } = props.data
    if ( frequency ) {
      return <span key={match+i}>
        {frequency.label}
      </span>
    }
    return null
  })

  return <span>
    {componentizedString}
  </span>

}

export default connect(
  state => ({
    activeCurrencySymbol: state.form.ui.currency.activeCurrencySymbol,
    data: state.form.data
  }),
  null
)(StringWithVariables)
