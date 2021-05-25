import React from 'react'
import { getWinterActivities } from '../../lib/api'

import ActivityCard from './ActivityCard'

function WinterActivityIndex() {
  const [activities, setActivities] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getWinterActivities()
        setActivities(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {activities ? (
            activities.map(activity => <ActivityCard key={activity._id} {...activity} />)
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default WinterActivityIndex