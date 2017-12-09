import React from 'react'
import Particles from 'react-particles-js'

import ParticlesParams from './particles-params'
import './AuthPage.css'
import logo from './img/logo.svg'

export default function AuthPage () {
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
          placeholder="login"
        />
        <input
          className="input input_password"
          type="password"
          placeholder="password"
        />
        <button className="button">Войти</button>
      </form>
      <p className="registration">
        Впервый на сайте?{' '}
        <a href="#" className="registration-link">
          Регистрация
        </a>
      </p>
    </main>
  )
}
