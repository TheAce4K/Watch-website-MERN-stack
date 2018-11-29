import React from 'react'
import PropTypes from 'prop-types'

class ItemInfo extends React.Component{
  itemDescription;
  render () {
    return (
      <div>
        <img alt=""/>
  <h1>{this.props.itemName}</h1>
  <h4>${this.props.itemPrice}</h4>
  <p>{this.itemDescription}</p>
  </div>
    )
  }
}

export default ItemInfo;
