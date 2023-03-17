import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import ShoppingCartContainer from '../components/shoppingcartcontainer/ShoppingCartContainer'




function ShoppingCart() {
    return (
        <>
            <NavBar />
            <ShoppingCartContainer />
            <Footer />
        </>
    )
}

export default ShoppingCart