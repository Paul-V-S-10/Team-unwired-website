import React from 'react'
import './Navbar.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarTop">
                <div className="navbarTopSocial">
                    <FaInstagram className='icon'/>
                    <FaLinkedinIn className='icon'/>
                    <FaFacebookF className='icon'/>
                    <TfiYoutube className='icon'/>
                </div>
                <p>teamunwired@nitc.ac.in</p>
            </div>
            <div className="navbarMenu">
                <img src="/logo.png" alt="" />
                <div className="navbarMenuLinks">
                    <a href="/">HOME</a>
                    <a href="/">ABOUT</a>
                    <a href="/">PROJECTS</a>
                    <a href="/">GALLERY</a>
                    <a href="/">TEAM</a>
                    <a href="/">SPONSORS</a>
                    <a href="/">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar