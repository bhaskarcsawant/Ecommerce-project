import React, { useEffect, useState } from 'react'
import './AdminSidebar.css'
import dashboardIcon from './assets/dashboardIcon.png'
import productIcon from './assets/productIcon.png'
import orderIcon from './assets/orderIcon.png'
import transactionIcon from './assets/transactionIcon.png'
import dropDownIcon from './assets/dropDownIcon.png'
import settingIcon from './assets/settingIcon.png'
import { Link } from 'react-router-dom';

function AdminSidebar({ pageNoactive }) {
    const [open, setOpen] = useState(false)

    let pages = document.querySelectorAll(".pageLinkContainer")

    useEffect(() => {
        let PageNo = 0
        if (pageNoactive < 5) {
            PageNo = pageNoactive
            if (pageNoactive == 1) {
                setOpen(true)
            }
            pages = document.querySelectorAll(".pageLinkContainer")
            pages.forEach((page) => {
                page.classList.remove('activePageContainer');
            })
            pages[PageNo].classList.add("activePageContainer")
            document.getElementById('settingLinkContainer').classList.remove("activePageContainer")
        }
    }, [])
    useEffect(() => {
        if (open) {
            document.getElementById('dropDownIcon').style.transform = 'rotate(180deg)'

        } else {
            document.getElementById('dropDownIcon').style.transform = 'rotate(0deg)'

        }
    }, [open])
    return (
        <>
            <div className="AdminSidebarContainer" id='AdminSidebarContainer'>
                <div className="topListContainer">
                    <Link className='SidebarLink' to='/admin/dashboard/'>
                        <div className="pageLinkContainer activePageContainer">
                            <img className='dashboardIcon' src={dashboardIcon} alt="" />
                            <h2 className='pageName'>Dashboard</h2>
                        </div>
                    </Link>
                    <div className="pageLinkContainer " onClick={() => {
                        setOpen(!open)
                        pages.forEach((page) => {
                            page.classList.remove('activePageContainer');
                        })
                        pages[1].classList.add("activePageContainer")
                        document.getElementById('settingLinkContainer').classList.remove("activePageContainer")
                    }}>
                        <img className='productIcon' src={productIcon} alt="" />
                        <h2 className='pageName'>Products</h2>
                        <img className='dropDownIcon' id='dropDownIcon' src={dropDownIcon} alt="" />
                    </div>
                    {open && (
                        <div className="subLinksContainer ">
                            <Link className='SidebarLink' to='/admin/dashboard/addproduct/'>
                                <h2 className='subPageName'>Add product</h2>
                            </Link>
                            <Link className='SidebarLink' to='/admin/dashboard/productlist/'>
                                <h2 className='subPageName'>Product list</h2>
                            </Link>
                            <Link className='SidebarLink' to='/admin/dashboard/categorylist/'>
                                <h2 className='subPageName'>Categories</h2>
                            </Link>
                        </div>
                    )
                    }
                    <Link className='SidebarLink' to='/admin/dashboard/orderlist/'>
                        <div className="pageLinkContainer ">
                            <img className='orderIcon' src={orderIcon} alt="" />
                            <h2 className='pageName'>Orders</h2>
                        </div>
                    </Link>
                    <Link className='SidebarLink' to='/admin/dashboard/transactionlist/'>
                        <div className="pageLinkContainer " >
                            <img className='transactionIcon' src={transactionIcon} alt="" />
                            <h2 className='pageName'>Transactions</h2>
                        </div>
                    </Link>
                </div>
                <div className="bottomListContainer ">
                    <Link className='SidebarLink' to='/admin/dashboard/settings/'>
                        <div className="settingLinkContainer" id='settingLinkContainer' onClick={() => {
                            document.getElementById('settingLinkContainer').style.backgroundColor = "var(--white-bg-1)";
                            pages.forEach((page) => {
                                page.classList.remove('activePageContainer');
                            })
                            console.log('ll');
                        }}>
                            <img className='settingIcon ' src={settingIcon} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="sideBarBg" id='sideBarBg'></div>
        </>
    )
}

export default AdminSidebar