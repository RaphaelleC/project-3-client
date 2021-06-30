import React from 'react'
import Error from '../common/Error'
import { Link } from 'react-router-dom'
import { getAllActivities } from '../lib/api'

function ActivitySearch() {
  const [activities, setActivities] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !activities & !isError
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllActivities()
        setActivities(res.data)
      } catch (e) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  const filteredActivities = activities?.filter((activity) => {
    return (
      activity.country.toLowerCase().includes(searchTerm) ||
      activity.categories.toString().toLowerCase().includes(searchTerm)
    )
  })

  console.log(filteredActivities)

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="winter-background-image hero-body">
        <input
          className="input is-medium is-success"
          placeholder="Search by activity type or Country.."
          onChange={handleInput}
          value={searchTerm}
        />
        <button className="button" type="button" onClick={handleClear}>Clear</button>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {isError && <Error />}
            {isLoading && <p>...loading</p>}
            {filteredActivities && (
              filteredActivities.map(activity =>  <div key={activity._id} className="column is-3">
                <Link to={`/activities/${activity._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title">{activity.activityName}</div>
                    </div>
                    <div className="card-header">
                      <div className="card-header-title">{activity.country}</div>
                    </div>
                    <div className="card-image">
                      <figure className="image image-is-1by1">
                        <img className="cardimg" src={activity.imageUrl} alt={activity.activityName} />
                      </figure>
                    </div>
                  </div>
                </Link>
              </div>
              )
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ActivitySearch
