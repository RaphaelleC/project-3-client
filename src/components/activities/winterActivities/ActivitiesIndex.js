import React from 'react'
import { getAllActivities } from '../../lib/api'
import Error from '../../common/Error'
import ActivityCard from './ActivityCard'

function WinterActivityIndex() {
  const [activities, setActivities] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !activities && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllActivities()
        setActivities(data)
      } catch (e) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const winterFilteredActivities = activities?.filter((activity) => {
    return (
      activity.season.includes('winter')
    )
  })

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="winter-background-image hero-body">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {isError && <Error />}
              {isLoading && <p>...loading</p>}
              {winterFilteredActivities && (
                winterFilteredActivities.map(activity => <ActivityCard key={activity._id} {...activity} />)
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default WinterActivityIndex
