import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

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
