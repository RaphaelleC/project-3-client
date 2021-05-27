import React from 'react'
export function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }
  return {
    formdata,
    formErrors,
    handleChange,
    setFormdata,
    setFormErrors,
  }
}