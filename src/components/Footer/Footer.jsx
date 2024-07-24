import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo1} alt=''/>
                <p>“Thank you for dining with us. We hope the food was to your liking and you will visit us again.” Thank you message for customer feedback.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH WITH US</h2>
                <li>
                    <li>+91-232-344-455-9</li>
                    <li>feedback09@food.com</li>
                </li>

            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 Food-all right Reserved</p>
    </div>
  )
}

export default Footer