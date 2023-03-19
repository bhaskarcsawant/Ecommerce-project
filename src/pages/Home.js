import React, { useEffect } from 'react'
import BannerSection from '../components/bannersection/BannerSection'
import BuildTrust from '../components/buildtrust/BuildTrust'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/herosection/HeroSection'
import NavBar from '../components/navbar/NavBar'
import NewsLetter from '../components/newsletter/NewsLetter'
import ProductCarousel from '../components/product_carousel/ProductCarousel'
import NewProducts from '../components/todaysproducts/NewProducts'
import { getProducts } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader/Loader'


function Home() {
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
                    <HeroSection />
                    <BannerSection />
                    <ProductCarousel products={products} />
                    <NewProducts />
                    <BuildTrust />
                    <NewsLetter />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Home