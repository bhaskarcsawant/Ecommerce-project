import React from 'react'
import styles from './herosection.module.css'

function HeroSection() {
    return (
        <div className={styles.hero_container}>
            <div className={styles.header_container}>

                <h1 className={styles.header_text}>Sale of the<br /> summer collection</h1>
                <div className={styles.button_container}>
                    <div className={styles.arrow_container}>
                        <img className={styles.arrow_icon} src={require('./assets/arrow.png')} alt='' />
                    </div>
                    <h3>
                        SHOP NOW
                    </h3>
                </div>

            </div>
            <img className={styles.hero_bg_img} src={require('./assets/bg1.png')} alt='' />
            <img className={styles.hero_bg_mob_img} src={require('./assets/bg_mob.png')} alt='' />
            <div className={styles.services_container}>
                <div className={styles.services}>
                    <div className={styles.service_1_container}>

                        <img className={styles.service_icon_img} src={require('./assets/shipping.png')} alt='' />

                        <div className={styles.service_data}>
                            <h2 className={styles.service_header}>Free Shipping</h2>
                            <h4 className={styles.service_header_light}>On purchases over ₹199</h4>
                        </div>
                    </div>
                    <div className={styles.service_1_container}>

                        <img className={styles.service_icon_img} src={require('./assets/satisfied.png')} alt='' />

                        <div className={styles.service_data}>
                            <h2 className={styles.service_header}>99% Satisfied Customers</h2>
                            <h4 className={styles.service_header_light}>Our clients' opinions
                                speak for themselves</h4>
                        </div>
                    </div>
                    <div className={styles.service_1_container}>

                        <img className={styles.service_icon_img} src={require('./assets/guarnatted.png')} alt='' />

                        <div className={styles.service_data}>
                            <h2 className={styles.service_header}>Originality Guaranteed</h2>
                            <h4 className={styles.service_header_light}>30 days warranty for each
                                product from our store</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection