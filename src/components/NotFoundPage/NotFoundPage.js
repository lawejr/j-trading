import React from 'react'
import Link from 'react-router-dom/Link'
import './NotFoundPage.css'

export default function NotFoundPage () {
  return (
    <main>
      <h1>NotFoundPage</h1>
      <Link to="/login">Login</Link>
    </main>
  )
}
