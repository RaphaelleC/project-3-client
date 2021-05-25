import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">
            Home 
          </Link>
          <Link to="/summerActivities" className="navbar-item">
            Summer Activities
          </Link>
          <Link to="/winterActivities" className="navbar-item">
            Winter Activities
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar