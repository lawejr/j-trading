import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'

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
