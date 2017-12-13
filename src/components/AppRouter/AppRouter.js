import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

export class AppRouter extends Component {
  render () {
    return this.props.isAuthorized ? <PrivateRouter /> : <PublicRouter />
  }
}

const mapStateToProps = state => ({ isAuthorized: state.auth.isAuthorized })

export default withRouter(connect(mapStateToProps)(AppRouter))
