import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import logo from "./assets/logo.png";
import "./navbar.css";
import ResumeBtn from "../Resume/ResumeBtn";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="logo-container">
                <img onClick={() => { window.location.href = "/" }} alt="logo" src={logo} width="100px" />
            </div>
            <div className="logo-nav">
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#experience">EXPERIENCE</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
