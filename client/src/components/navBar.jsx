import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class NavBar extends React.Component{
  render () {
    return (
      <React.Fragment>
        <nav>
          <img src="" alt=""/>
          <ul>
            <li><h1>Namnet på sidan</h1></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/sold-watches">Sold Watches</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}
export default NavBar
