import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from '../AuthPage'
import NotFoundPage from '../NotFoundPage'

export default function PublicRouter () {
  return (
    <Switch>
      <Route path="/login" component={AuthPage} />
      <Route path="/registration" component={AuthPage} />
      <Redirect from="/" to="login" />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
