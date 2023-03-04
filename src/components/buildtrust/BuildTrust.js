import React from 'react'
import './buildtrust.css'

function BuildTrust() {
    return (
        <>
            <div className="container">

                <h3 align='center' className="header_3">Why should you choose us?</h3>
                <div className="trust_container">
                    <div className="trust_component">
                        <img className="trust_icon" src={require('./assets/shipping.png')} alt='' />
                        <h3>Free Shipping</h3>
                        <h4>All purchases over ₹199 are eligible for
                            free shipping via USPS First Class Mail.</h4>
                    </div>
                    <div className="trust_component">
                        <img className="trust_icon" src={require('./assets/payments.png')} alt='' />
                        <h3>Easy Payments</h3>
                        <h4>All payments are processed instantly
                            over a secure payment protocol.</h4>
                    </div>
                    <div className="trust_component">
                        <img className="trust_icon" src={require('./assets/money.png')} alt='' />
                        <h3>Money-Back Guarantee</h3>
                        <h4>If an item arrived damaged or you've
                            changed your mind, you can send it
                            back for a full refund.</h4>
                    </div>
                    <div className="trust_component">
                        <img className="trust_icon" src={require('./assets/quality.png')} alt='' />
                        <h3>Finest Quality</h3>
                        <h4>Designed to last, each of our products has
                            been crafted with the finest materials.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildTrust