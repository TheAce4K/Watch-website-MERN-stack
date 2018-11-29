import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class NavBar extends React.Component{
  render () {
    return (
      <React.Fragment>
        <nav>
          <img alt=""/>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}
export default NavBar
