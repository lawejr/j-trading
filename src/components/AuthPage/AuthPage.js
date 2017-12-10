import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'
import Particles from 'react-particles-js'

import { loginRequest, registrationRequest } from '../../actions/auth'
import ParticlesParams from './particles-params'
import './AuthPage.css'
import logo from './img/logo.svg'

export class AuthPage extends PureComponent {
  constructor (props) {
    super(props)

    this.state.isLogin = props.location.pathname === '/login'
  }

  componentWillReceiveProps (nextProps) {
    const nextIsLogin = nextProps.location.pathname === '/login'

    if (this.state.isLogin !== nextIsLogin) {
      this.setState({ isLogin: !this.state.isLogin })
    }
  }

  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    const { isLogin, email, password } = this.state
    const { loginRequest, registrationRequest } = this.props

    isLogin
      ? loginRequest({ email, password })
      : registrationRequest({ email, password })
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  renderNavPanel = () => {
    return this.state.isLogin ? (
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
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input input_username"
            type="email"
            name="email"
            placeholder="e-mail"
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
            {this.state.isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
        {this.renderNavPanel()}
      </main>
    )
  }
}

const mapDispatchToProps = {
  loginRequest,
  registrationRequest
}

export default connect(null, mapDispatchToProps)(AuthPage)
