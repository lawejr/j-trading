import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { getBtcSellCourse, getEthSellCourse } from '../../reducers/currency'
import './Header.css'
import logo from './img/logo_white.svg'

export class Header extends Component {
  render () {
    const { btcCourse, ethCourse } = this.props

    return (
      <header className="Header">
        <Link className="logo-link" to="/">
          <img
            className="logo-img"
            src={logo}
            alt="J-Trading"
            width="210"
            height="80"
          />
        </Link>
        <nav className="currency-menu">
          <NavLink className="currency-link" to="/trade/btc">
            {btcCourse}
            <br />
            <b className="currency-name">1 btc</b>
          </NavLink>
          <NavLink className="currency-link" to="/trade/eth">
            {ethCourse}
            <br />
            <b className="currency-name">1 eth</b>
          </NavLink>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  btcCourse: getBtcSellCourse(state),
  ethCourse: getEthSellCourse(state)
})

export default connect(mapStateToProps)(Header)
