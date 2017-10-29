import React, { Component } from 'react'
import { connect } from 'react-redux'

import Radio from './Radio'

import * as actions from '../store/Form/actions'


class DonationFrequency extends Component {

  state = {

  }

  componentDidMount() {
    const { items } = this.props

    if ( items ) {
      this.props.setFormUIOption({
        donationFrequencySuffix: `/ ${items[0].label}`
      })
      this.props.updateFormData({ frequency: items[0] })
    }
  }

  _onChange = (event, index) => {
    const { items } = this.props

    if ( items ) {
      const selectedItem = items.find(item => item.value === event.target.value)

      this.props.setFormUIOption({
        donationFrequencySuffix: `/ ${selectedItem.label}`
      })
      this.props.updateFormData({ frequency: selectedItem })
    }

  }

  render() {
    const { items } = this.props

    return <Radio
      id={'frequency'}
      name={'frequency'}
      items={items}
      onChange={this._onChange}
    />
  }
}

export default connect(
  state => ({

  }),
  {
    ...actions
  }
)(DonationFrequency)