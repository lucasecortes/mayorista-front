import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Header() {
  return (
      <div className='Header-container'>
        <LinkRouter to='/'>
          <img className='Header-logo' src='/img/logo.jpg' alt='header-logo'></img>
        </LinkRouter>
      </div>
  )
}
