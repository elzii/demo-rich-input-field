import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { InputRadio, InputGroup } from './Common'

import * as actions from '../store/Form/actions'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10px;
  margin-right: -10px;
`

const InputWrap = styled.div`
  margin-top: 5px;
  padding: 0 10px;
`


class Radio extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    groupClass: PropTypes.string,
    value: PropTypes.any,
  }

  state = {
    activeIndex: 0,
    isSimple: false,
    isComplex: false,
  }

  componentDidMount() {

  }

  _onChange = (event, index) => {

    const { id, onChange } = this.props

    this.setState({
      activeIndex: parseFloat(index)
    })

    this.props.updateFormData({
      [id]: event.target.value
    })

    if ( onChange ) {
      onChange(event)
    }
  }

  render() {
    const { id, items } = this.props

    return <InputGroup>
      <Container>
        {
          items.map((item, i) => {
            return <InputWrap className="DNTLY-field-wrap" key={i}>
              <InputRadio
                type="radio"
                id={`${id}-${i}`}
                className="DNTLY-input-radio"
                onChange={event => this._onChange(event, i)}
                checked={this.state.activeIndex === i}
                value={item.value}
              />
              <label htmlFor={`${id}-${i}`}>{item.label}</label>
            </InputWrap>
          })
        }
      </Container>
    </InputGroup>



    // return null
  }
}

export default connect(
  null,
  {
    ...actions
  }
)(Radio)