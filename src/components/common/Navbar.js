import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth'

function Navbar() {
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }
  return (
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            🏔
          </Link>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/summerActivities" className="button is-warning">
            Summer Activities
            </Link>
            <Link to="/winterActivities" className="button">
            Winter Activities
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!isLoggedIn ?
                <>
                  <Link to="/register" className="button has-text-white has-background-success-dark">
                Register
                  </Link>
                  <Link to="/login" className="button has-text-white has-background-success-dark">
                Log in
                  </Link>
                </>
                :
                <>
                  <Link to="/create" className="button has text-white has-background-success-dark">
                  Create Activity
                  </Link>
                  <button className="button has-text-white has-background-danger-dark" onClick={handleLogout}>Log out</button>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar