import { logRoles } from "@testing-library/dom";
import react from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg'
import './Header_85.scss'

const Header_85 = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>
                <div className="options">
                    <Link to="/shop_85" className="option">Shop</Link>
                    <Link to="/Contact_85" className="option">Contact</Link>
                    <Link to="/signin_85" className="option">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header_85;