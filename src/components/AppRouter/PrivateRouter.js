import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProfilePage from '../ProfilePage'
import NotFoundPage from '../NotFoundPage'

export default function PrivateRouter () {
  return (
    <Switch>
      <Route path="/profile" component={ProfilePage} />
      <Redirect from={['/login', '/registration']} to="/profile" />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
