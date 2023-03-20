import { Link as LinkRouter } from 'react-router-dom'

export default function NavLinks() {
    const pages = [
        { name: 'Home', to: '/' },
        { name: 'Products', to: '/products' },
        { name: 'Contact', to: '/contact' }
    ]
    const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}>{pages.name}</LinkRouter>
    
    return (
        <>
            {pages.map(link)}
        </>
    )
}
