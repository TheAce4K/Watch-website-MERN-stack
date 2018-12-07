import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import App from '../App'
import ItemInfo from './itemInfo'

class Items extends React.Component{

  render () {
    return (
    <div className="item">
        <Link to={`/${this.props.item.linkName}`}  onClick={() => this.props.onItemLinkClick(this.props.item)}>
          <img src={`../resources/${this.props.item.linkName}.jpg`} alt=""/>
          <h1>{this.props.item.itemName}</h1>
        </Link>
        <h4>${this.props.item.itemPrice}</h4>
      </div>
    )
  }
}

export default Items;
