import { useState } from 'react'
import { connect } from 'react-redux'
import { isSignedIn } from '../../store/actions/authActions'
// = initial State
const initialState = {
  email: '',
  password: '',
}
const SignIn = (props) => {
  //  = setting multiple values to state
  const [{ email, password }, setState] = useState(initialState)
  //  = onChange on the state
  const onChangeValues = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  //  = clearing the state
  const clearState = () => {
    setState({ ...initialState })
  }
  //  = handle submit the state
  const handleSubmit = (e) => {
    e.preventDefault()
    props.isSignedIn({ email, password })
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
          <div
            className={`${props.authError ? 'red-text' : 'green-text'} center`}
          >
            <p>{props.authError ?? null}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ auth: { authError } }) => {
  return {
    authError,
  }
}
// const mapStateToProps = (state) => {
//   return {
//     email: state.auth.email,
//     password: state.auth.password,
//   }
// }
const mapDispatchToProps = {
  isSignedIn,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
