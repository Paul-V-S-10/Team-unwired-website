import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer">
                <div className="footerTop">
                    <div className="footerText">
                        <h3>For Enquiries Contact</h3>
                        <p>Dr.V Sajith , Associate Professor(MED) & Faculty Advisor
                            Team Unwired, NIT Calicut
                            +91 9446361125, sajith@nitc.ac.in</p>
                    </div>
                    <div className="footerText">
                        <h3>For More Information</h3>
                        <p>Dr.Shijo Thomas, Associate Professor(MED)& Faculty Advisor
                            Team Unwired, NIT Calicut
                            +91 9446276409, shijo@nitc.ac.in</p>
                    </div>
                    <div className="footerText">
                        <h3>Contact Address</h3>
                        <p>Team Unwired
                            C/o Dr.V Sajith / Dr.Shijo Thomas
                            Department of Materials Science and Engineering
                            National Institute of Technology Calicut
                            Kattangal , Kerala , India</p>
                    </div>
                    <img src="/lg1.jpg" alt="" />
                </div>
                <div className="footerBottom">
                    <div className="footerBottomCopywrite">
                        Copyright 2018 | Template from <span>Colorlib</span>
                    </div>
                    <div className="footerBottomLogos">
                        <FaInstagram className='logo'/>
                        <FaLinkedinIn className='logo'/>
                        <FaFacebookF className='logo'/>
                        <TfiYoutube className='logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer