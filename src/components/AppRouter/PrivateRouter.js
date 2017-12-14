import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TradePage from '../TradePage'
import NotFoundPage from '../NotFoundPage'

export default function PrivateRouter () {
  return (
    <Switch>
      <Route path="/trade/:type" component={TradePage} />
      <Route path="/trade" component={TradePage} />
      <Redirect
        // from={['/login', '/registration', '/', '/trade']}
        to="/trade/btc"
      />
      <Route component={NotFoundPage} />
    </Switch>
  )
}
