import React from 'react'
import { getAllActivities } from '../../lib/api'
import ActivityCard from './ActivityCard'

function SummerActivitiesIndex() {
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

  const summerFilteredActivities = activities?.filter((activity) => {
    return (
      activity.season.includes('Summer')
    )
  })

  return (

    <section className="section summer-background-image">
      <div className="container">
        <div className="columns is-multiline">
          {summerFilteredActivities ? (
            summerFilteredActivities.map(activity => <ActivityCard key={activity._id} {...activity} />)
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
    </section>


  )
}

export default SummerActivitiesIndex