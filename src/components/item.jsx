import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import App from '../App'
import ItemInfo from './itemInfo'

class Items extends React.Component{

  render () {
    return (
      <React.Fragment>
    <div>
        <Link to={`/${this.props.item.linkName}`} onClick={() => this.props.onItemLinkClick(this.props.item)}>
          <img src="https://via.placeholder.com/250" alt=""/>
          <h1>{this.props.item.itemName}</h1>
        </Link>
        <h4>${this.props.item.itemPrice}</h4>
      <button onClick={() =>  this.props.onAddToCart(this.props.id)}>Add to cart</button>
      </div>
    </React.Fragment>
    )
  }
}

export default Items;
