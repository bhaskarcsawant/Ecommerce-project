import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar({ theme }) {
    console.log(theme)
    const handleHamburger = () => {
        var slide_nav = document.getElementById('slide_nav')
        var slide_nav_bg = document.getElementById('slide_nav_bg')

        slide_nav_bg.style.display = 'block'
        slide_nav_bg.style.opacity = '100'
        slide_nav.style.marginLeft = '0%'
    }
    const handleCloseHamburger = () => {
        var slide_nav = document.getElementById('slide_nav')
        var slide_nav_bg = document.getElementById('slide_nav_bg')
        slide_nav.style.marginLeft = '200%'
        slide_nav_bg.style.display = 'none'
    }
    return (
        <>
            <div className={styles.container_main} style={{
                borderBottom: theme === 'dark' ? '1px solid var(--grey-1)' : 'none',

            }}>
                <div className={styles.nav_container} style={{
                    position: theme === 'dark' ? 'relative' : 'absolute',
                }}>
                    <div className={styles.nav_link_container}>
                        <div className={styles.nav_item_container}>
                            <a className={styles[(theme === 'dark' ? 'nav_logo_dark' : 'nav_logo')]} href='./index.html'>E-Shop</a>
                        </div>
                        <div className={styles.nav_item_container1}>
                            <a className={styles[(theme === 'dark' ? 'a_dark' : '')]} href='./index.html'>Men</a>
                            <a className={styles[(theme === 'dark' ? 'a_dark' : '')]} href='./index.html'>Women</a>
                            <a className={styles[(theme === 'dark' ? 'a_dark' : '')]} href='./index.html'>Kids</a>
                        </div>
                    </div>
                    <div className={styles.nav_link_container}>
                        <div className={styles.nav_item_container_1}>
                            <form>
                                <input className={styles[(theme === 'dark' ? 'input_dark' : 'input')]} type="text" name="" placeholder="Search products" />
                                <button type="submit">
                                    <img className={styles.hero_search_img} src={require('./assets/search.png')} alt='' />
                                    <img className={styles.hero_search_dark_img} src={require('./assets/search_dark.png')} alt='' />
                                </button>
                            </form>
                            <Link to="/cart">

                                <img className={styles.hero_cart_img} style={{ display: theme === 'dark' ? 'none' : '' }} src={require('./assets/cart.png')} alt='' />
                                <img className={styles.hero_cart_dark_img} style={{ display: theme === 'dark' ? 'block' : '' }} src={require('./assets/cart_dark.png')} alt='' />
                            </Link>
                            <div>
                                <img className={styles.hero_user_img} style={{ display: theme === 'dark' ? 'none' : '' }} src={require('./assets/avatar.png')} alt='' />
                                <img onClick={() => handleHamburger()} style={{ display: theme === 'dark' ? 'block' : '' }} className={styles.hero_hamburger_img} src={require('./assets/hamburger.png')} alt='' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id='slide_nav' className={styles.slide_nav}>
                <img onClick={() => handleCloseHamburger()} className={styles.hero_close_img} src={require('./assets/close.png')} alt='' />
                <div className={styles.hamburger_links}>
                    <a href='./index.html'>Men</a>
                    <a href='./index.html'>Women</a>
                    <a href='./index.html'>Kids</a>
                </div>
            </div>
            <div id='slide_nav_bg' className={styles.slide_nav_bg}></div>
        </>

    )
}

export default NavBar