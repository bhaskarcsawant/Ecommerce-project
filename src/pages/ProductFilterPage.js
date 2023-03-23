import React, { useEffect } from 'react'
import NavBar from '../components/navbar/NavBar'
import ProductFilters from '../components/product_filter/ProductFilters'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'
import { getProducts } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader/Loader'

function ProductFilterPage() {
    const dispatch = useDispatch()

    const { loading, error, products, productCount } = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProducts)
    }, [dispatch])
    return (
        <>
            {loading ? (<Loader />) : (
                <>
                    <NavBar />
                    <ProductFilters products={products} />
                    <NewsLetter />
                    <Footer />
                </>
            )}
        </>
    )
}

export default ProductFilterPage