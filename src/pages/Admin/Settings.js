import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import SettingsModule from '../../components/SettingsModule/SettingsModule'

function Settings() {
    return (
        <>
            <Navbar pageNo="6" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <SettingsModule />
                </div>

            </div>
        </>
    )
}

export default Settings