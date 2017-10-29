import React from 'react'
import { connect } from 'react-redux'
import { status } from '../constants'

import { InputGroup, Button } from './Common'
import StringWithVariables from './StringWithVariables'

import LoadingSpinner from './LoadingSpinner'

const Submit = ({ ...props }) => {

  const { _status, value } = props

  const buttonActionVerb = value
    ? value
    : 'Donate'

  const { amount } = props.data

  return <InputGroup>

    <Button
      full
      type="submit"
      id={`DNTLY-submit`}
      style={{
        minHeight: '52px'
      }}
    >
      {
        _status === status.SUBMITTING &&
        <LoadingSpinner />
      }
      {
        _status !== status.SUBMITTING && !!amount &&
        <StringWithVariables string={`${buttonActionVerb} {{amount}} {{frequency}}`} />
      }
      {
        _status !== status.SUBMITTING && !amount &&
        <span>{buttonActionVerb}</span>
      }
    </Button>
  </InputGroup>

}

export default connect(
  state => ({
    _status: state.form._status,
    data: state.form.data,
  }),
  null
)(Submit)