import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav-header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/profile/johndoe'>Profile</Link>
    </nav>
  )
}

export default Header
