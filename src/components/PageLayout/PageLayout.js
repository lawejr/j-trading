import React, { PureComponent } from 'react'

import Header from '../Header'
// import Footer from '../Footer'
import './PageLayout.css'

export default class PageLayout extends PureComponent {
  render () {
    return (
      <div className="PageLayout">
        <Header />
        {this.props.children}
        {/* <Footer /> */}
      </div>
    )
  }
}
