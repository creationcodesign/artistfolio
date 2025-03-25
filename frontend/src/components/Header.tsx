import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import logo from '../assets/icons/logo.svg';
import { useState } from "react";


export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => setIsActive(!isActive)

    return (
        <header>
            <NavLink to='/'>
                <img src={logo} alt="logo" width={32} />
            </NavLink>
            <div className={`header-navbar-container ${isActive ? 'active' : ''}`}>
                <Navbar />
            </div>
            <div className="mobile-icons">
                {!isActive ?
                    <svg width="35" height="35" viewBox="0 0 61 35" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleActive}>
                        <path d="M3 2.5H58" stroke="#D6ACFF" strokeWidth="5" strokeLinecap="round" />
                        <path d="M3 17.5H58" stroke="#D6ACFF" strokeWidth="5" strokeLinecap="round" />
                        <path d="M3 32.5H58" stroke="#D6ACFF" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    :
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleActive}>
                        <path d="M18 6L6 18" stroke="#D6ACFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#D6ACFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }
            </div>
        </header>
    )
}
