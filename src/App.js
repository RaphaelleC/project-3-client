import React from 'react'

function App() {
  const [activities, setActivities] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/activities')
      const json = await res.json()
      setActivities(json)
    }
    getData()
  })

  return (
    <>
      {activities.map(activity => <h1 key={activity._id}>{activity.name}</h1>)}
    </>
  )
}

export default App
