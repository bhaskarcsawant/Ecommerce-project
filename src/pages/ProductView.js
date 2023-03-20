import React, { useEffect } from 'react'
import NavBar from '../components/navbar/NavBar'
import ProductViewDetails from '../components/productviewdetails/ProductViewDetails'
import SaleNote from '../components/salenote/SaleNote'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'
import { getProductDetails } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import NewProducts from '../components/todaysproducts/NewProducts'

function Productview() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { productDetails } = useSelector((state) => state.productDetails)
    const { loading, products, productCount } = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])

    return (
        <>

            <SaleNote />
            <NavBar theme={'dark'} page={'productView'} />
            <ProductViewDetails product={productDetails} />
            <NewProducts products={products} loading={loading} />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Productview