import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
    return <div className="footerLinks">
        <div className="footerLinkItems">
            <h2>Join Us</h2>
            <Link to='/Signup'>Signup</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
        </div>
        <div className="footerLinkItems">
            <h2>Contact us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
        </div>
        <div className="footerLinkItems">
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
        </div>
    </div>;
}

export default Footer;