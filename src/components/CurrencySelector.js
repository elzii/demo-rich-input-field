import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'


import { getCurrency, supportedCurrencies } from '../services/currencies'

import * as actions from '../store/Form/actions'

const DropdownTriggerWrapper = styled.div`
  position: relative;
  top: 1px;
  right: 1px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  color: ${props => props.theme.TEXT_MUTED};
  transition: color 50ms ease-in-out;
  background: white;
  border-radius: 3px;
  height: 48px;
  height: calc(100% - 2px);

  &:hover {
    color: ${props => props.theme.TEXT};
  }
`

const DropdownTriggerIcon = styled.span`
  display: inline-block;
  margin-left: 3px;
  font-size: 8px;
`

const DropdownTriggerText = styled.span`
  display: inline-block;
  font-size: 14px;
`

export class CurrencySelectorTrigger extends Component {
  state = {}

  _onClick = event => {
    event.preventDefault()

    this.props.setFormUIOption({
      displayToggle: {
        currencyDropdown: true,
      },
    })
  }

  render() {
    const { currency: { activeCurrencyCode } } = this.props.ui
    const { displayToggle: { currencyDropdown } } = this.props.ui

    const activeStyles = currencyDropdown ? { transform: 'rotate(180deg)' } : {}

    return (
      <DropdownTriggerWrapper
        className="DNTLY-dropdown-trigger"
        onClick={this._onClick}
      >
        <DropdownTriggerText className="DNTLY-dropdown-trigger-text">
          {activeCurrencyCode}
        </DropdownTriggerText>
        <DropdownTriggerIcon
          className="DNTLY-dropdown-trigger-icon"
          style={activeStyles}
        >
          ▼
        </DropdownTriggerIcon>
      </DropdownTriggerWrapper>
    )
  }
}

CurrencySelectorTrigger = connect(
  state => ({
    ui: state.form.ui,
  }),
  {
    ...actions,
  },
)(CurrencySelectorTrigger)

const Dropdown = styled.div`
  max-height: 240px;
  margin-top: 5px;

  /* border-right: 1px solid ${props => props.theme.BORDER_MUTED};
  border-bottom: 1px solid ${props => props.theme.BORDER_MUTED};
  border-left: 1px solid ${props => props.theme.BORDER_MUTED}; */

  border: 1px solid ${props => props.theme.BORDER_MUTED};
  border-radius: 3px;

  background: white;
  overflow: scroll;
`

const DropdownMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const DropdownMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.BORDER_MUTED};

  &:last-child {
    border-bottom: 1px solid transparent;
  }

  &:hover {
    background: #f8fafb;
  }
`

const CurrencyCode = styled.span``

const CurrencyName = styled.span`
  opacity: 0.35;
  font-size: 14px;
`

export class CurrencySelector extends Component {
  static propTypes = {}

  state = {}

  _handleClickOutside = event => {
    const domNode = findDOMNode(this)

    if (!domNode || !domNode.contains(event.target)) {
      this.props.setFormUIOption({
        displayToggle: {
          currencyDropdown: false,
        },
      })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this._handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleClickOutside)
  }

  _handleCurrencySelection = (event, code) => {
    event.preventDefault()

    this.props.setCurrency(code)
    this.props.setFormUIOption({
      displayToggle: {
        currencyDropdown: false,
      },
    })
  }

  render() {

    return (
      <Dropdown>
        <DropdownMenu>
          {supportedCurrencies.map((currencyCode, i) => (
            <DropdownMenuItem
              key={i}
              onClick={event =>
                this._handleCurrencySelection(event, currencyCode)}
            >
              <CurrencyCode>{currencyCode}</CurrencyCode>
              <CurrencyName>{getCurrency(currencyCode).name}</CurrencyName>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )

    // return null
  }
}

CurrencySelector = connect(
  state => ({
    ui: state.form.ui,
    config: state.form.config,
  }),
  {
    ...actions,
  },
)(CurrencySelector)
