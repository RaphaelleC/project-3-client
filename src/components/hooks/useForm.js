import React from 'react'

export function useForm(initialFormdata) {
  const [formdata, setFormdata] = React.useState(initialFormdata)

  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  return {
    formdata,
    handleChange,
  }
}