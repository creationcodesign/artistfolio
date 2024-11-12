import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <HashLink to="#selected-work">My work</HashLink>
            <HashLink to="#about">About</HashLink>
            <HashLink to="#skills">Skills</HashLink>
            <HashLink to="#contact">Contact</HashLink>
        </nav>
    )
}
