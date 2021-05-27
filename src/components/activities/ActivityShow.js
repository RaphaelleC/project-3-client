import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteActivity, getSingleActivity } from '../lib/api'
import { isCreator } from '../lib/auth'
import Error from '../common/Error'

function ActivityShow() {
  const { activityId } = useParams()
  const [activity, setActivity] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !activity && !isError

  React.useEffect(() => {
    const getData = async () => {

      try {
        const { data } = await getSingleActivity(activityId)
        setActivity(data)
      } catch (e) {
        setIsError(true)
      }
    }
    getData()
  }, [activityId])

  const handleDelete = async () => {
    await deleteActivity(activityId)
    history.push('/')
  }

  return (
    <section className="section">
      <div className="container">
        {isError && <Error/>}
        {isLoading && <p>...loading</p>}
        {activity && (
          <div>
            <h2 className="title has-text-centered">{activity.activityName}</h2>
            <hr />
            <figure className="image">
              <img src={activity.imageUrl} alt={activity.activityName} />
            </figure>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="content is-medium">
                  <h4 className="title is-4">
                    Country
                  </h4>
                  <p>{activity.country}</p>
                  <br />
                  <h4 className="title is-4">
                    Categories
                  </h4>
                  <ul>{activity.categories.map(category => <li key={category._id}>{category}</li>)}</ul>
                  <br />
                  <h4 className="title is-4">
                    Description
                  </h4>
                  <p>{activity.description}</p>
                  <h4 className="title is-4">Creator</h4>
                  <p>{activity.user.username}</p>
                </div>
                {isCreator(activity.user._id) && (
                  <div className="buttons">
                    <Link to={`/activities/${activity._id}/edit`} className="button has-text-white has-background-success-dark">
                      Edit my activity
                    </Link>
                    <button onClick={handleDelete} className="button is-danger">
                      Delete my activity
                    </button>
                  </div>
                )}
              </div>
              <div className="column">
                <p>FUTURE MAPBOX ZONE</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ActivityShow