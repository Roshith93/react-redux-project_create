import { NavLink } from 'react-router-dom'

export const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/signin'>Sign In</NavLink>
      </li>
      <li>
        <NavLink to='/'>Sign Up</NavLink>
      </li>
    </ul>
  )
}
