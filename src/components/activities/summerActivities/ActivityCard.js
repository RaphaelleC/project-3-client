import { Link } from 'react-router-dom'

function ActivityCard({ _id, activityName, imageUrl, country }) {
  return (
    <div className="column is-3">
      <Link to={`/activities/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{activityName}</div>
          </div>
          <div className="card-header">
            <div className="card-header-title">{country}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img className="cardimg" src={imageUrl} alt={activityName} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ActivityCard
