import { Link } from 'react-router-dom'

function ActivityCard({ _id, name, imageUrl, country  }) {
  return (
    
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/activities/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-header">
            <div className="card-header-title">{country}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={imageUrl} alt={name} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ActivityCard
