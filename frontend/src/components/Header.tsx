import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import logo from '../assets/icons/logo.svg';


export default function Header() {
    return (
        <header>
            <NavLink to='/'>
                <img src={logo} alt="logo" width={32} />
            </NavLink>
            <Navbar />
        </header>
    )
}
