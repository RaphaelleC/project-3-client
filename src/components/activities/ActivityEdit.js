import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { getSingleActivity, editActivity } from '../lib/api'

function ActivityEdit() {
  const history = useHistory()
  const { activityId } = useParams()
  const { formdata, formErrors, handleChange, setFormErrors, setFormdata } = useForm({
    country: '',
    name: '',
    season: '',
    description: '',
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

  const handleSubmit = async e => {
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
          <form 
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Country</label>
              <div className="control">
                <input
                  className={`input ${formErrors.country ? 'is-danger' : ''}`}
                  placeholder="Country"
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
              <label className="label">Name</label>
              <div className="control">
                <input
                  className={`input ${formErrors.name ? 'is-danger' : ''}`}
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
              {formErrors.name && (
                <p className="help is-danger">{formErrors.name}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Season</label>
              <div className="control">
                <input
                  className={`input ${formErrors.season ? 'is-danger' : ''}`}
                  placeholder="Season"
                  name="season"
                  onChange={handleChange}
                  value={formdata.season}
                />
              </div>
              {formErrors.season && (
                <p className="help is-danger">{formErrors.season}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className={`input ${formErrors.description ? 'is-danger' : ''}`}
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={formdata.description}
                />
              </div>
              {formErrors.description && (
                <p className="help is-danger">{formErrors.description}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className={`input ${formErrors.imageUrl ? 'is-danger' : ''}`}
                  placeholder="Image URL"
                  name="imageUrl"
                  onChange={handleChange}
                  value={formdata.imageUrl}
                />
              </div>
              {formErrors.imageUrl && (
                <p className="help is-danger">{formErrors.imageUrl}</p>
              )}
            </div>
            <div className="field">
              <button type="submit" className="button has-text-white has-background-success-dark">
                Edit my activity !
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ActivityEdit