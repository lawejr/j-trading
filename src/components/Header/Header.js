import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.css'
import logo from './img/logo_white.svg'

export default class Header extends Component {
  render () {
    return (
      <header className="Header">
        <Link className="logo-link" to="/">
          <img
            className="logo-img"
            src={logo}
            alt="J-trading"
            width="210"
            height="80"
          />
        </Link>
        <nav className="currency-menu">
          <NavLink className="currency-link" to="/trade/btc">
            4277,5<br />
            <b className="currency-name">1 btc</b>
          </NavLink>
          <NavLink className="currency-link" to="/trade/eth">
            4277,5<br />
            <b className="currency-name">1 btc</b>
          </NavLink>
        </nav>
      </header>
    )
  }
}
