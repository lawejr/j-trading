import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import withRouter from 'react-router-dom/withRouter'
import AuthPage from '../AuthPage'
import NotFoundPage from '../NotFoundPage'

export class AppRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({ isAuthorized: state.auth.isAuthorized })

export default withRouter(connect(mapStateToProps)(AppRouter))
