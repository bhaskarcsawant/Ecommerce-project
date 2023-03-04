import React from 'react'
import styles from './bannersection.module.css'

function BannerSection() {
    return (
        <div className={styles.container_banner_main}>
            <div className={styles.banner_container}>
                <div className={styles.banner_div}>
                    <div className={styles.banner_data}>
                        <h3 className={styles.banner_header}>New arrivals are now in!</h3>
                        <div className={styles.banner_btn}>SHOW COLLECTION</div>
                    </div>
                    <img className={styles.banner_bg_img} src={require('./assets/banner_big.png')} alt='' />
                </div>
                <div className={styles.banner_div_1}>
                    <div className={styles.sub_banner_div}>
                        <div className={styles.banner_data_1}>
                            <h3 className={styles.banner_header_1}>Basic t-shirts<br /> ₹699</h3>
                            <div className={styles.banner_btn_1}>MORE DETAILS</div>
                        </div>
                        <img className={styles.banner_bg_img} src={require('./assets/banner_sm_1.png')} alt='' />
                    </div>
                    <div className={styles.sub_banner_div}>
                        <div className={styles.banner_data_1}>
                            <div className={styles.discount}>-50%</div>
                            <h3 className={styles.banner_header_1}>Sale this summer</h3>
                            <div className={styles.banner_btn_1}>VIEW ALL</div>
                        </div>
                        <img className={styles.banner_bg_img} src={require('./assets/banner_sm_2.png')} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection