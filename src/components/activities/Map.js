import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
// import Error from '../common/Error'
// import { Link } from 'react-router-dom'
// import { getAllActivities } from '../lib/api'
mapboxgl.accessToken = 'pk.eyJ1IjoiZHZsODIiLCJhIjoiY2twY2xkYzdtMWRwOTJ6b2c2Mm5tYmQ3ZiJ9.5eRDrTf0TkOB0c6psh_oLQ'

function Mapbox() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  // const [activities, setActivities] = React.useState(null)
  // const [isError, setIsError] = React.useState(false)
  // const isLoading = !activities & !isError
  const [searchTerm, setSearchTerm] = React.useState('')

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await getAllActivities()
  //       setActivities(res.data)
  //     } catch (e) {
  //       setIsError(true)
  //     }
  //   }
  //   getData()
  // }, [])
  console.log(process.env)

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  // const filteredActivities = activities?.filter((activity) => {
  //   return (
  //     activity.country.toLowerCase().includes(searchTerm) ||
  //     activity.categories.toString().toLowerCase().includes(searchTerm)
  //   )
  // })


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
          <div>
            <div ref={mapContainer} className="map-container" />
          </div>
        </div>
      </section>
    </section>



  )
}
export default Mapbox
