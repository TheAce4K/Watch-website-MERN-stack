import React from 'react'
import PropTypes from 'prop-types'

class ItemInfo extends React.Component{
  render () {
    return (
      <div className="item-info">
        <img src={`../resources/${this.props.linkName}.jpg`} alt=""/>
        <div className="item-info-text">
          <h1>{this.props.itemName}</h1>
          <h4>${this.props.itemPrice}</h4>
          <h3>To purchase the item please click the button below to email us so we can respond to your request</h3>
          <button>Purchase</button>
          <p>{this.props.itemDescription}</p>

        </div>
      </div>
    )
  }
}

export default ItemInfo;
