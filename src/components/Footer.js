import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  const pages = [
    { name: 'Home', to: '/' },
    { name: 'Groceries', to: '/groceries' },
    { name: 'Contact', to: '/contact' }
  ]

  const year = new Date();

  const link = (page) => <LinkRouter className='Links' to={page.to} key={page.name}>{page.name}</LinkRouter>

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='Footer-container'>
      <div>© {year.getFullYear()}</div>
      <div className='Link-container'>{pages.map(link)}</div>
      <div className='ScrollUp' onClick={scrollUp}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </div>
    </footer>
  )
}
