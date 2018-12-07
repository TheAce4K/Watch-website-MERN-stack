import React from 'react'
import PropTypes from 'prop-types'
import App from '../App'

class Items extends React.Component{

  render () {
    return (
    <div className="item">
          <img src={`../resources/${this.props.item.linkName}.jpg`} alt=""/>
          <h1>{this.props.item.itemName}</h1>
      </div>
    )
  }
}

export default Items;
