import React, { useState, useEffect } from 'react'
import { validate } from './validation'

const Form = ({ addUser, users }) => {
  const initialFormState = { id: null, nickname: '', email: '', ip: '' }
  const [ user, setUser ] = useState(initialFormState)
  const [ errors, setErrors ] = useState({})
  const [ isSubmitting, setIsSubmitting ] = useState(false)

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        addUser(user)
        setUser(initialFormState)
      }
    },
    [ errors ]
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(user))
    setIsSubmitting(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname
        <input type='text' name='nickname' value={user.nickname} onChange={handleChange} />
        {errors.nickname && <p className='red-text'>{errors.nickname}</p>}
      </label>
      <label>
        Email
        <input type='email' name='email' value={user.email} onChange={handleChange} />
        {errors.email && <p className='red-text'>{errors.email}</p>}
      </label>
      <label>
        IP address
        <input type='text' name='ip' value={user.ip} onChange={handleChange} />
        {errors.ip && <p className='red-text'>{errors.ip}</p>}
      </label>
      <button className='btn'>Add user</button>
    </form>
  )
}

export default Form
