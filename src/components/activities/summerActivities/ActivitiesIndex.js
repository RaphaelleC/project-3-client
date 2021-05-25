import React from 'react'
import { getSummerActivities } from '../../lib/api'
import ActivityCard from './ActivityCard'



function SummerActivitiesIndex() {
  const [activities, setActivities] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await
        getSummerActivities()
        setActivities(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <section>
      <div>
        <div>
          {activities ? (activities.map(activity => <ActivityCard key={activity._id} {...activity} />)
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
    </section>
  )

}

export default SummerActivitiesIndex