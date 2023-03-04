import React, { useEffect, useState } from 'react'
import searchIcon from './assets/Icon.png';
import ham from './assets/ham.png';
import notiRing from './assets/ring.png';
import avatar from './assets/avatar.jpg';
import './NavBar.css'
import AdminSidebar from '../AdminSidebar/AdminSidebar';


function Navbar({ pageNo }) {
    const [openSd, setOpenSD] = useState(false)
    window.addEventListener('resize', () => {

        if (window.innerWidth > 1000) {
            setOpenSD(true)
        }
    })
    useEffect(() => {
        if (window.innerWidth > 1000) {
            setOpenSD(true)
        }
        if (openSd) {
            document.getElementById('AdminSidebarContainer').style.left = '0'
            document.getElementById('sideBarBg').style.display = 'block'
        } else {

            document.getElementById('AdminSidebarContainer').style.left = '-200vw'
            document.getElementById('sideBarBg').style.display = 'none'
        }
    }, [openSd])
    return (
        <>
            <div className="NavBarContainer">
                <div className="NavLeftContainer">
                    <h3 className='AdminNavlogo'>E-DASH</h3>
                    <img className='HamBurger' src={ham} onClick={() => setOpenSD(!openSd)} alt="" />
                    <form>
                        <input className='input' type="text" name="" placeholder="Search" />
                        <button className='searchBt' onClick={(e) => e.preventDefault()}>
                            <img src={searchIcon} alt="" />
                        </button>
                    </form>
                </div>
                <div className="NavRightContainer">
                    <img src={notiRing} alt="" />
                    <img className='avatar' src={avatar} alt="" />
                </div>
            </div>
            <AdminSidebar pageNoactive={pageNo} />
        </>
    )
}

export default Navbar