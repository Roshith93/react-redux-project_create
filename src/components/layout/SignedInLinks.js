import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
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
          RR
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = {
  logOut,
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
