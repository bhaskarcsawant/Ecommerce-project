import React from 'react'
import './newsletter.css'

function NewsLetter() {
    return (
        <>
            <div className="newsletter_container">
                <img className="newletter_img" src={require('./assets/bg1.png')} alt='' />
                <div className='news_cta_container'>
                    <h3>Subscribe to our newsletter and
                        receive exclusive offers every week</h3>
                    <form action="">
                        <input className='email_input' type="text" placeholder='Enter your email' />
                        <input className='submit_bt' type="submit" value='SUBSCRIBE' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewsLetter