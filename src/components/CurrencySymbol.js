import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TextFit from 'react-textfit'


const Glyph = styled.span.attrs({
  className: ''
})`
  display: ${props => props.overlay ? 'flex' : 'inline'};
  align-items: center;
  justify-content: center;
  position: ${props => props.overlay ? 'absolute' : 'relative'};
  transform: ${props => props.overlay ? 'translateY(-50%)' : 'none'};
  top: ${props => props.overlay ? '50%' : 'auto'};
  padding: ${props => props.overlay ? '0 3px' : '0' };
  width: ${props => props.overlay ? '50px' : 'auto' };
  text-align: center;
  font-weight: ${props => props.overlay ? 'bold' : 'inherit' };
  font-size: ${props => props.size ? props.size : 'inherit'};
  line-height: 1;
`

const Inner = styled.div`
  width: 20px;
`

const CurrencySymbol = ({ overlay, size, ...props }) => {

  const { currency: { activeCurrencySymbol } } = props.ui

  const children = overlay
    ? (
       <Inner>
         <TextFit mode="single" max={24} min={10}>
           {activeCurrencySymbol}
         </TextFit>
       </Inner>
      )
    : activeCurrencySymbol

  return <Glyph overlay={overlay} size={size} style={props.style}>
    {children}
  </Glyph>
}

CurrencySymbol.propTypes = {
  overlay: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}


export default connect(
  state => ({
    ui: state.form.ui
  }),
  null
)(CurrencySymbol)