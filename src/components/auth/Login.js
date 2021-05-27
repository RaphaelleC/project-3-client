import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'
import { useForm } from '../hooks/useForm'

function Login() {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(formdata)
      setToken(res.data.token)
      history.push('/')
    } catch (err) {
      setIsError(true)
    }
  }
  const handleFocus = () => {
    setIsError(false)
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
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              {isError && <p className="help is-danger">Incorrect details. Please try again!</p>}
            </div>
            <div className="field">
              <button 
                type="submit"
                className="button is-fullwidth has-text-white has-background-success-dark">
                  Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login