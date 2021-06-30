import React from 'react'
import useForm from '../hooks/useForm'
import { registerUser } from '../lib/api'
import { useHistory } from 'react-router-dom'

function Register() {
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
    username: '',
    email: '',
    location: '',
    favSeason: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      setFormErrors(err.response.data.errors)
      console.log(err.response.data.errors)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${formErrors.username ? 'is-danger' : ''}`}
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              {formErrors.username && (
                <p className="help is-danger">{formErrors.username}</p>
              )}
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              {formErrors.email && <p className="help is-danger">Email is required!</p>}
            </div>
            <div className="field">
              <label className="label" htmlFor="location">
                Location
              </label>
              <div className="control">
                <input
                  className="input"
                  name="location"
                  id="location"
                  placeholder="Location"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="favSeason">
                Favourite Season
              </label>
              <div className="control">
                <input
                  className="input"
                  name="favSeason"
                  id="favSeason"
                  placeholder="Favourite Season"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              {formErrors.password && <p className="help is-danger">Password is required!</p>}
            </div>
            <div className="field">
              <label className="label" htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                />
              </div>
              {formErrors.passwordConfirmation && <p className="help is-danger">Does not match password!</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth has-text-white has-background-success-dark">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
