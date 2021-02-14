import { useState } from 'react'
// = initial State
const initialState = {
  email: '',
  password: '',
}
export const SignIn = () => {
  //  = setting multiple values to state
  const [{ email, password }, setState] = useState(initialState)
  //  = onChange on the state
  const onChangeValues = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  //  = clearing the state
  const clearState = () => {
    console.log('calling')
    setState({ ...initialState })
  }
  //  = handle submit the state
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    clearState()
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={onChangeValues}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onChangeValues}
          />
        </div>
        <div className='input-field'>
          <button type='submit' className='btn pink lighten-1 z-depth-0'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
