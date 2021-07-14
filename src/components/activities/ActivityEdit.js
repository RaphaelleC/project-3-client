import React from 'react'
import Select from 'react-select'
import useForm from '../hooks/useForm'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleActivity, editActivity } from '../lib/api'
import ImageUpload from '../hooks/imageUpload'

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

function ActivityEdit() {
  const history = useHistory()
  const { activityId } = useParams()
  const { formdata, formErrors, handleChange, setFormErrors, setFormdata, handleMultiSelect, handleImageUpload } = useForm({
    country: '',
    activityName: '',
    description: '',
    season: '',
    categories: [],
    imageUrl: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleActivity(activityId)
        setFormdata(res.data)
      } catch (e) {
        setFormErrors(e.response.data.errors)
      }
    }
    getData()
  }, [activityId, setFormdata, setFormErrors])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await editActivity(activityId, formdata)
      history.push(`/activities/${data._id}`)
    } catch (e) {
      setFormErrors(e.response.data.errors)
    }
  }

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
              <label className="label">Please select categories</label>
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

export default ActivityEdit
