import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AuthPage from '../AuthPage'
import NotFoundPage from '../NotFoundPage'

export default function PublicRouter () {
  return (
    <Switch>
      <Route path="/login" component={AuthPage} />
      <Route path="/registration" component={AuthPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
