import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth'

function Navbar() {
  useLocation()
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }
  return (
    <nav className="navbar is-blue">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src='https://i.imgur.com/0uVCbH7.png'/>
          </Link>
        </div>
        <div className="navbar-item">
          <div className="navbarActivities">
            <Link to="/search" >
            Find an Adventure
            </Link>
            <Link to="/summerActivities" >
            Summer Activities
            </Link>
            <Link to="/winterActivities">
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
                  <Link to="/create" className="button has-text-white has-background-success-dark">
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
