import { useState } from 'react'

export const SignIn = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, password)
  }
  return (
    <div className='container'>
      <form onSubmit={console.log()} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>email</label>
          <input
            type='text'
            id='email'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <button
            type='submit'
            className='btn pink lighten-1 z-depth-0'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
