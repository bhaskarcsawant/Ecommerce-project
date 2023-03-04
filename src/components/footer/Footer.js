import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer_sub_container">
                    <h2>E-Shop</h2>
                    <h4>House My Brand designs clothing for the young, the old &
                        everyone in between – but most importantly, for the fashionable</h4>
                    <div className='social_container'>
                        <img className="social_icon" src={require('./assets/facebook.png')} alt='' />
                        <img className="social_icon" src={require('./assets/twitter.png')} alt='' />
                        <img className="social_icon" src={require('./assets/linkedin.png')} alt='' />
                        <img className="social_icon" src={require('./assets/instagram.png')} alt='' />
                        <img className="social_icon" src={require('./assets/youtube.png')} alt='' />
                    </div>
                </div>
                <div className="footer_sub_container1">
                    <div className="footer_data_container">
                        <h2>Shopping online</h2>
                        <div className='data_links'>
                            <h3>Order Status</h3>
                            <h3>Shipping and Delivery</h3>
                            <h3>Returns</h3>
                            <h3>Payment Options</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                    <div className="footer_data_container">
                        <h2>Information</h2>
                        <div className='data_links'>
                            <h3>Gift Cards</h3>
                            <h3>Find a store</h3>
                            <h3>Newsletter</h3>
                            <h3>Bacome a member</h3>
                            <h3>Site feedback</h3>
                        </div>
                    </div>
                    <div className="footer_data_container">
                        <h2>Contact</h2>
                        <div className='data_links'>
                            <h3>Bhaskarcsawant.github.com</h3>
                            <h3>Mob No : 724 972 0417 </h3>

                        </div>
                    </div>

                </div>
            </div>
            <div className="credits_container">
                <h3 align='center'>CODED WITH ❤️ BY BHASKAR SAWANT- © 2023. ALL RIGHTS RESERVED.</h3>
            </div>
        </>
    )
}
