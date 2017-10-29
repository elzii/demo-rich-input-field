import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import { getStyle } from '../util'

const EmptySpace = styled.span`
  display: block;
  color: transparent;
  font-size: inherit;
  font-weight: bold;
`

const Suffix = styled.span`
  display: block;
  font-size: 14px; /* Make this a little less than the parent */
  /* opacity: 0.65; */
  color: #b3c1c5;
  padding-left: 8px;
`

const Overlay = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`


class InputOverlay extends Component {

  static propTypes = {
    suffix: PropTypes.string.isRequired
  }

  state = {
    style: {}
  }

  componentDidMount() {
    const el = findDOMNode(this)
    const inputEl = el.parentNode.querySelector('input')

    // @TODO: This is bugged in safari, style measurements aren't accurate
    let style = {
      paddingLeft: getStyle(inputEl, 'padding-left'),
      paddingTop: getStyle(inputEl, 'padding-top'),
      paddingBottom: getStyle(inputEl, 'padding-bottom'),
      fontSize: getStyle(inputEl, 'font-size'),
    }

    this.setState({
      style
    })

  }

  render() {

    const { value, suffix } = this.props

    return <Overlay style={{
      ...this.state.style
    }}>
      <EmptySpace>{value}</EmptySpace>
      <Suffix>{suffix}</Suffix>
    </Overlay>
  }
}

export default InputOverlay