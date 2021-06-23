import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
// import Geocoder from 'react-map-gl-geocoder'
import Select from 'react-select'
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { createActivity } from '../lib/api'
import ImageUpload from '../hooks/imageUpload'

mapboxgl.accessToken = 'pk.eyJ1IjoiZHZsODIiLCJhIjoiY2twY2xkYzdtMWRwOTJ6b2c2Mm5tYmQ3ZiJ9.5eRDrTf0TkOB0c6psh_oLQ'

const categoryOptions = [
  { value: 'backpacking', label: 'Backpacking' },
  { value: 'bikeTours', label: 'Bike Tours' },
  { value: 'camping', label: 'Camping' },
  { value: 'hiking ', label: 'Hiking' },
  { value: 'mountainBiking', label: 'Mountain Biking' },
  { value: 'natureTrips', label: 'Nature Trips' },
  { value: 'roadBiking', label: 'Road Biking' },
  { value: 'rockClimbing', label: 'Rock Climbing' },
  { value: 'skiing', label: 'Skiing' },
  { value: 'snowboarding', label: 'Snowboarding' },
  { value: 'snowshoeing', label: 'Snowshoeing' },
  { value: 'trailRunning', label: 'Trail Running' },
  { value: 'walking', label: 'Walking' }
]

const defaultCoordinates = {
  latitude: 43.70,
  longitude: 5.41,
}

function ActivityNew() {
  const history = useHistory()
  const { formdata, handleChange, handleMultiSelect, handleImageUpload, formErrors } = useForm({
    country: '',
    activityName: '',
    description: '',
    season: '',
    categories: [],
    imageUrl: '',
    location: defaultCoordinates,
  })

  const mapContainer = useRef(null)
  const map = useRef(null)

  // const [lng, setLng] = useState(5.41)
  // const [lat, setLat] = useState(43.70)
  const [zoom, setZoom] = useState(3)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [formdata.location.longitude, formdata.location.latitude],
      zoom: zoom,
    })
    const marker = new mapboxgl.Marker({
      color: '#FFFFFF',
      draggable: true,
    })
      .setLngLat([8.15, 46.27])
      .addTo(map.current)
      // marker.dragend(console.log)
    marker.on('dragend', () => {
      const lngLat = marker.getLngLat()

      handleChange({
        target: {
          name: 'location',
          value: {
            latitude: lngLat.lat,
            longitude: lngLat.lng,
          },
        },
      })
    })
    marker.on('style.load', () => {
      marker.on('click', (e) => {
        const coordinates = e.lngLat
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML('you clicked here: <br/>' + coordinates)
          .addTo(map)
      })
    })
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createActivity(formdata)
      history.push(`/activities/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  console.log('formdata', formdata)

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label" htmlFor="country">Country</label>
              <div className="control">
                <input
                  className="input"
                  name="country"
                  onChange={handleChange}
                  value={formdata.country}
                />
              </div>
              {formErrors.country && (
                <p className="help is-danger">{formErrors.country}</p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="activityName">Activity Name</label>
              <div className="control">
                <input
                  className="input"
                  name="activityName"
                  onChange={handleChange}
                  value={formdata.activityName}
                />
              </div>
              {formErrors.activityName && (
                <p className="help is-danger">{formErrors.activityName}</p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="description">Description</label>
              <div className="control">
                <input
                  className="textarea"
                  name="description"
                  value={formdata.description}
                  onChange={handleChange}
                />
              </div>
              {formErrors.description && (
                <p className="help is-danger">{formErrors.description}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Season:</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="season"
                    value="summer"
                    onChange={handleChange}
                    checked={formdata.season === 'summer'}
                  />
                Summer
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="season"
                    value="winter"
                    onChange={handleChange}
                    checked={formdata.season === 'winter'}
                  />
                Winter
                </label>
              </div>
              {formErrors.season && (
                <p className="help is-danger">{formErrors.season}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Select Activity Type</label>
              <div className="control">
                <Select
                  options={categoryOptions}
                  isMulti
                  onChange={handleMultiSelect}
                />
              </div>
              {formErrors.categories && (
                <p className="help is-danger">{formErrors.categories}</p>
              )}
            </div>
            <div className="field">
              <ImageUpload onUpload={handleImageUpload} />
            </div>
            {formErrors.imageUrl && (
              <p className="help is-danger">{formErrors.imageUrl}</p>
            )}
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
            <div className="field">
              <button className="button is-fullwidth is-dark" type="submit">
            Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ActivityNew
