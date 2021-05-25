import { Link } from 'react-router-dom'

function ActivityCard ({ _id, activityName, imageUrl, country }) {
  return (
    <div>
      <Link to={`/activities/${_id}`}>
        <div>
          <div>
            <div>{activityName}</div>
          </div>
          <div>
            <figure><img src={imageUrl} alt={activityName}/></figure>
          </div>
          <div>
            <h5>{country}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ActivityCard