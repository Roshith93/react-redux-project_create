import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  const { initial } = props
  return (
    <ul className='right'>
      <li>
        <NavLink to='/createproject'>New Project</NavLink>
      </li>
      <li>
        <a onClick={props.logOut}>Log Out</a>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          {initial}
        </NavLink>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    initial: state.firebase.profile.initial,
  }
}
const mapDispatchToProps = {
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
