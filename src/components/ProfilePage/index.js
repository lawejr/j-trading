import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../actions/auth'

export class ProfilePage extends PureComponent {
  onClickLogout = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render () {
    return (
      <main>
        <button
          className="logout-button"
          type="button"
          onClick={this.onClickLogout}
        >
          Выход
        </button>
        <p>Profile page</p>
      </main>
    )
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(ProfilePage)
