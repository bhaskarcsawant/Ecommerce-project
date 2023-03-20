import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import ProductCard from '../productcard.js/ProductCard'
import './product_carousel.css'
import { Link } from 'react-router-dom'


function ProductCarousel({ products, loading }) {
    let box

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - (width * 0.26);

    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + (width * 0.26);
        console.log(width * 0.255)
        // width -= 50
        // console.log(width)
    }
    const swipeprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - (width * 0.6);

    }

    const swipenext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + (width * 0.6);
        console.log(width * 0.255)
        // width -= 50
        // console.log(width)
    }
    useEffect(() => {
        box = document.getElementById('product-container');
    }, [loading])
    const handlers = useSwipeable({
        onSwipedLeft: () => swipenext(),
        onSwipedRight: () => swipeprev(),
    })

    return (
        <>
            <div className="container_carousel">
                <div className="carousel_header">
                    <h3 className="header">Selected just for you</h3>
                    <Link to="/products">
                        <div className="btn_1">SHOW MORE</div>
                    </Link>
                </div>
            </div>
            <div className="navigation">
                <button className="arrowActive" onClick={btnpressprev}><img className="arrow" src={require('./assets/arrow1.png')} alt='' /></button>
                <button className="arrow" onClick={btnpressnext}><img className="arrow" src={require('./assets/arrow.png')} alt='' /></button>
            </div>
            <div className="product-carousel">

                <div {...handlers} className="product-container" id='product-container' >
                    {products && !loading ? products.map(product => <ProductCard data={product} key={product._id} />) : null}
                </div>
            </div>
        </>
    )
}

export default ProductCarousel