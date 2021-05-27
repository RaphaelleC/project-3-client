import React from 'react'
import { useParams } from 'react-router-dom'
<<<<<<< HEAD:src/components/activities/ActivitiesShow.js
import getSingleActivity from '../../lib/api'
import Error from '../common/Error'
=======
import { getSingleActivity } from '../lib/api'
>>>>>>> development:src/components/activities/ActivityShow.js

function ActivityShow() {
  const [activity, setActivity] = React.useState(null)
  const { id } = useParams()
  const [isError, setIsError] = React.useState(false)
  const isLoading = !activity && !isError

  React.useEffect(() => {
    const getData = async () => {

      try {
        const { data } = await getSingleActivity(id)
        setActivity(data)
      } catch (e) {
        setIsError(true)
      }
    }
    getData()
  }, [id])

  return (
    <section className="section">
      <div className="container">
        {isError && <Error/>}
        {isLoading && <p>...loading</p>}
        {activity && (
          <div>
            <h2 className="title has-text-centered">{activity.activityName}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <h4 className="title is-4">
                  Country
                </h4>
                <p>{activity.country}</p>
                <h4 className="title is-4">
                  Name
                </h4>
                <p>{activity.activityName}</p>
                <h4 className="title is-4">
                  Season
                </h4>
                <p>{activity.season}</p>
                <h4 className="title is-4">
                  Description
                </h4>
                <p>{activity.description}</p>
              </div>
              <div className="column is-half">
                <figure className="image">
                  <img src={activity.imageUrl} alt={activity.activityName} />
                </figure>
              </div>
            </div>
          </div>
        ) }
      </div>
    </section>
  )
}

export default ActivityShow