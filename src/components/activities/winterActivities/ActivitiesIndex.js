import React from 'react'
import { getAllActivities } from '../../lib/api'

import ActivityCard from './ActivityCard'

function WinterActivityIndex() {
  const [activities, setActivities] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllActivities()
        setActivities(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const winterFilteredActivities = activities?.filter((activity) => {
    return (
      activity.season.includes('Winter')
    )
  })

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="winter-background-image hero-body">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {winterFilteredActivities ? (
                winterFilteredActivities.map(activity => <ActivityCard key={activity._id} {...activity} />)
              ) : (
                <p>...loading</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default WinterActivityIndex