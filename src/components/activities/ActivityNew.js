import React from 'react'
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { createActivity } from '../lib/api'

function ActivityNew() {
  const history = useHistory()
  const { formdata, handleChange } = useForm({ 
    country: '',
    activityName: '',
    description: '',
    season: '',
    categories: [],
    imageUrl: '',
  })

  // const handleChange = event => {
  //   const nextFormData = { ...formdata, [event.target.name]: event.target.value }
  //   setFormData(nextFormData)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createActivity(formdata)
      history.push(`/activities/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
      
    // window.alert(`Submitting ${JSON.stringify(formdata, null, 2)}`)
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
            </div>
            <div className="field">
              <button type="button" className="button is-fullwidth is-info">
            Upload Image
              </button>
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