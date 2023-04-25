import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'


function NavBar({ theme, page }) {
    const Navigate = useNavigate()

    useEffect(() => {
        if (page === "productView") {
            document.getElementById("search-img-dark").style.top = "-0.8rem"

        }
    }, [page])
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

    const [keyword, setKeyword] = useState()
    const searchHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            Navigate(`/products/${keyword}`)
        }
        else {
            Navigate(`/products/`)
        }
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
                            <a className={styles[(theme === 'dark' ? 'nav_logo_dark' : 'nav_logo')]} href='./index.html'>E-Store</a>
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
                                <input className={styles[(theme === 'dark' ? 'input_dark' : 'input')]} type="text" name="" onChange={(e) => setKeyword(e.target.value)} placeholder="Search products" />
                                <button type="submit">
                                    <img className={styles.hero_search_img} src={require('./assets/search.png')} onClick={(e) => searchHandler(e)} alt='' />
                                    <img className={styles.hero_search_dark_img} id="search-img-dark" src={require('./assets/search_dark.png')} onClick={(e) => searchHandler(e)} alt='' />
                                </button>
                            </form>
                            <Link to="/cart">

                                <img className={styles.hero_cart_img} style={{ display: theme === 'dark' ? 'none' : '' }} src={require('./assets/cart.png')} alt='' />
                                <img className={styles.hero_cart_dark_img} style={{ display: theme === 'dark' ? 'block' : '' }} src={require('./assets/cart_dark.png')} alt='' />
                            </Link>
                            <div>
                                <Link to="/login">
                                    <img className={styles.hero_user_img} style={{ display: theme === 'dark' ? 'none' : '' }} src={require('./assets/avatar.png')} alt='' />
                                </Link>
                                <img onClick={() => handleHamburger()} style={{ display: theme === 'dark' ? 'block' : '' }} className={styles.hero_hamburger_img} src={require('./assets/hamburger.png')} alt='' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id='slide_nav' className={styles.slide_nav}>
                <img onClick={() => handleCloseHamburger()} className={styles.hero_close_img} src={require('./assets/close.png')} alt='' />
                <div className={styles.hamburger_links}>
                    <a href='/account'>Account</a>
                    <a href='/login'>login</a>
                </div>
            </div>
            <div id='slide_nav_bg' className={styles.slide_nav_bg}></div>
        </>

    )
}

export default NavBar