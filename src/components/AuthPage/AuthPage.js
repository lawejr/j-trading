import React, { PureComponent } from 'react'
import Link from 'react-router-dom/Link'
import Particles from 'react-particles-js'

import ParticlesParams from './particles-params'
import './AuthPage.css'
import logo from './img/logo.svg'

export default class AuthPage extends PureComponent {
  state = {
    login: '',
    password: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  renderNavPanel = isLogin => {
    return isLogin ? (
      <p className="registration">
        Впервый на сайте?{' '}
        <Link to="/registration" className="registration-link">
          Регистрация
        </Link>
      </p>
    ) : (
      <p className="registration">
        Уже зарегистрированы?{' '}
        <Link to="/login" className="registration-link">
          Войти
        </Link>
      </p>
    )
  }

  render () {
    const isLogin = this.props.location.pathname === '/login'

    return (
      <main className="AuthPage">
        <Particles className="particles-bg" params={ParticlesParams} />
        <img
          className="logo"
          src={logo}
          alt="j-trading"
          width="243"
          height="88"
        />
        <form className="form" action="/login">
          <input
            className="input input_username"
            type="text"
            name="login"
            placeholder="login"
            onChange={this.handleInputChange}
          />
          <input
            className="input input_password"
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleInputChange}
          />
          <button className="button">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
        {this.renderNavPanel(isLogin)}
      </main>
    )
  }
}
