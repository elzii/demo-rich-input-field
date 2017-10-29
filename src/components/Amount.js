import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import numeral from 'numeral'

import * as actions from '../store/actions'

import CurrencySymbol from './CurrencySymbol'
import { CurrencySelectorTrigger, CurrencySelector } from './CurrencySelector'
import InputOverlay from './InputOverlay'
import { InputGroup, InputWrap } from './Common'

const CurrencySelectorTriggerWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  text-align: center;
`

// Match padding-left to CurrencySymbol overlay width as needed
const AmountInput = styled.input.attrs({
  type: 'text',
  autoComplete: "off",
  spellCheck: false
})`
  padding-left: 40px !important;
  font-size: 22px;
  font-weight: 700;
  background: transparent;
  width: 100%;
  padding: 14px 10px;
  outline: none;
  border: 1px solid #dee9ed;
  border-radius: 3px;
  transition: border 100ms ease-in-out;

  &:focus {
    border-color: ${props => props.theme.PRIMARY}
  }
`

class Amount extends Component {

  static propTypes = {

  }

  state = {

  }

  componentDidMount() {

    const { value } = this.props

    // Set a default manually
    this.props.updateFormData({
      amount:  numeral(value || 25).format('0,0')
    })

  }

  _onChange = event => {
    event.preventDefault()

    this.props.updateFormData({
      amount: !!event.target.value ? numeral(event.target.value).format('0,0') : ""
    })
  }

  render() {

    const { showCurrencies } = this.props

    const {
      displayToggle: { currencyDropdown },
      donationFrequencySuffix
    } = this.props.ui

    const { amount } = this.props.data

    const defaultPlaceholder = null

    // return <pre>{JSON.stringify(this.props, null, 2)}</pre>
    return <InputGroup>
      <InputWrap className="">
        <CurrencySymbol overlay={true} />

        {
          donationFrequencySuffix &&
          <InputOverlay value={amount} suffix={donationFrequencySuffix} />
        }

        {
          showCurrencies &&
          <CurrencySelectorTriggerWrap>
            <CurrencySelectorTrigger />
          </CurrencySelectorTriggerWrap>
        }

        {/* This has a bug with cursor position when getting value from state */}
        <AmountInput
          id={'amount'}
          value={!!amount ? amount : ""}
          placeholder={defaultPlaceholder}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        />

      </InputWrap>

      {
        currencyDropdown &&
        <CurrencySelector />
      }
    </InputGroup>
  }
}


export default connect(
  state => ({
    data: state.form.data,
    fields: state.form.fields,
    ui: state.form.ui,
  }),
  {
    ...actions,
  },
)(Amount)
