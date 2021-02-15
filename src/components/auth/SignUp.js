import { useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/createUser'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

const SignUp = (props) => {
  const [{ email, firstName, lastName, password }, setState] = useState(
    initialState
  )

  const resetState = () => setState({ ...initialState })

  const onChangeValues = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.createUser({ email, firstName, lastName, password })
    console.log(email, firstName, lastName, password)
    resetState()
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
        <div className='input-field'>
          <label htmlFor='firstName'>firstName</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={onChangeValues}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>lastName</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={onChangeValues}
          />
        </div>
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({
  createUser: { email, firstName, lastName, password },
}) => {
  return {
    email,
    firstName,
    lastName,
    password,
  }
}
const mapDispatchToProps = {
  createUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
