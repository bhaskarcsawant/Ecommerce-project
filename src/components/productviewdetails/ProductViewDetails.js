import React, { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import ProductPath from '../productpath/ProductPath'
import './productviewdetails.css'



function ProductViewDetails({ product }) {
    const [counter, setCounter] = useState(1)
    const [display, setDisplay] = useState()
    const add_counter = () => {
        setCounter(counter + 1)
    }
    const minus_counter = () => {
        setCounter(counter - 1)
    }
    const set_desc_display = () => {
        document.getElementById('review_btn').classList.remove('desc_review_btn_active')
        document.getElementById('desc_btn').classList.add('desc_review_btn_active')
        document.getElementById('product_view_desc_container').style.display = 'flex'
        document.getElementById('product_view_reviews_container').style.display = 'none'
    }
    const set_review_display = () => {
        document.getElementById('desc_btn').classList.remove('desc_review_btn_active')
        document.getElementById('review_btn').classList.add('desc_review_btn_active')
        document.getElementById('product_view_desc_container').style.display = 'none'
        document.getElementById('product_view_reviews_container').style.display = 'flex'
    }
    const images = [
        {
            url: require('./assets/product_img.png'),
            id: '001',
        },
        {
            url: require('./assets/product_img.png'),
            id: '002',
        },
        {
            url: require('./assets/product_img.png'),
            id: '003',
        },
        {
            url: require('./assets/product_img.png'),
            id: '004',
        },
    ]
    const [mainImage, setMainImage] = useState(images[0])
    useEffect(() => {
        if (product) {
            setMainImage(product.images[0])
        }
    }, [product])


    return (
        <>
            {!product ? (<Loader />) : (


                <div className='productview_details_main_container'>
                    <div className='productview_details_container'>
                        <div className="productview_container_1">
                            {/* <div className="productpath_container">
                        <h3 className="product_path">
                            <img className='home_img' src={require('./assets/home.png')} alt='' />
                            &nbsp;&nbsp;/&nbsp;&nbsp;<span>Men's Tops</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>T-Shirt</span>&nbsp;&nbsp;
                            /&nbsp;&nbsp;<span className='final_path'>&nbsp;&nbsp;T-Shirt Summer Vibes</span>
                        </h3>
                    </div> */}
                            <ProductPath />
                            <div className="image_display_container">
                                <div className="imagelist_container">
                                    {product.images.map((imgs, index) => {
                                        return <img className='product_listed_img'
                                            src={imgs.url}
                                            key={index}
                                            alt={imgs.id}
                                            onClick={() => setMainImage(imgs)}
                                        />

                                    })}
                                </div>
                                <div className="single_image_display">
                                    <img className='product_full_img' src={mainImage.url} alt='' />
                                </div>

                            </div>
                        </div>
                        <div className="productview_container_2">
                            <div className="product_view_services_container">
                                <div className="product_view_services">
                                    <img className='product_view_service_img' src={require('./assets/delivery.png')} alt='' />
                                    <div className="product_view_service_data">
                                        <h3 className='product_view_service_header'>
                                            Standard shipment<br />
                                            <span className='product_view_service_sub_data'>Free within 3-6 business days</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="product_view_services">
                                    <img className='product_view_service_img' src={require('./assets/fast_delivery.png')} alt='' />
                                    <div className="product_view_service_data">
                                        <h3 className='product_view_service_header'>
                                            Express delivery<br />
                                            <span className='product_view_service_sub_data'>₹35 available</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="product_view_sale_id_container">
                                <div className="product_view_product_discount">-50%</div>
                                <h3 className='product_view_id' align='right'>
                                    Product ID:<br />
                                    261331
                                </h3>
                            </div>
                            <h2 className='product_view_product_name' align='left'>
                                {product.name}
                            </h2>
                            <div className="product_view_price_brand_container">
                                <div className='product_view_price_container'>
                                    <h3 className="product_view_product_price">₹{product.price}</h3>
                                    <h3 className="product_view_discounted_price">₹1399</h3>
                                </div>
                                <h3 className='product_view_brand'>{product.brand}</h3>
                            </div>
                            <div className="product_view_color_selector_container">
                                <h3 className='color_header'>Color:</h3>
                                <div className="color_selector_btn_container">
                                    <div className="color_btn_div">
                                        <button className='product_color_btn'></button>
                                    </div>
                                    <div className="color_btn_div">
                                        <button className='product_color_btn'></button>
                                    </div>
                                    <div className="color_btn_div">
                                        <button className='product_color_btn'></button>
                                    </div>
                                    <div className="color_btn_div">
                                        <button className='product_color_btn'></button>
                                    </div>
                                </div>
                            </div>
                            <div className="product_view_size_container">
                                <div className="size_header_div">
                                    <h3 className='size_header'>Size:</h3>
                                    <h3 className='size_table_header'>See size table</h3>
                                </div>
                                <div className="size_selector_container">
                                    <div className="size_btn_div">
                                        <button className='product_size_btn'>S</button>
                                    </div>
                                    <div className="size_btn_div">
                                        <button className='product_size_btn'>M</button>
                                    </div>
                                    <div className="size_btn_div">
                                        <button className='product_size_btn'>L</button>
                                    </div>
                                </div>
                            </div>
                            {product.stock < 1 ? (
                                // <button className='add_to_cart_btn'>o</button>
                                <h2 style={{ color: "var(--red)", paddingTop: "7%" }}>Out of stock</h2>
                            ) : (
                                <div className="quantity_add_cart_like_container">
                                    <h3 className='quantity_header'>Quantity:</h3>
                                    <div className="quantity_add_cart_like_div">
                                        <div className="counter_container">
                                            <div className="minus_icon" onClick={() => minus_counter()}>-</div>
                                            <div className="counter">{counter}</div>
                                            <div className="plus_icon" onClick={() => add_counter()}>+</div>
                                        </div>
                                        <button className='add_to_cart_btn'>ADD TO CART</button>

                                        <button className='like_btn'>
                                            <img className='like_img' src={require('./assets/like.png')} alt="" />
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="product_description_review_container">
                        <div className="desc_review_btn_container">
                            <button className='desc_btn desc_review_btn_active' id='desc_btn' onClick={() => set_desc_display()}>DESCRIPTION</button>
                            <button className='review_btn' id='review_btn' onClick={() => set_review_display()}>REVIEWS <span className='review_count'>(2)</span></button>
                        </div>
                        <div className="product_view_desc_container" id='product_view_desc_container'>
                            <img className='desc_img' src={require('./assets/desc.png')} alt="" />
                            <h3 align='center' className='desc_header'>Details and product description</h3>
                            <h4 align='center' className='product_description'>{product.descreption}</h4>
                        </div>
                        <div className="product_view_reviews_container" id='product_view_reviews_container'>
                            <div className="review_container">
                                <img className='desc_img' src={require('./assets/person.png')} alt="" />
                                <div className='review_person_data'>
                                    <h3 className='review_person_name'>Steve Jobs</h3>
                                    <h3 className='review_person_review'>This is a wonderful product</h3>
                                </div>
                            </div>
                            <div className="review_container">
                                <img className='desc_img' src={require('./assets/person.png')} alt="" />
                                <div className='review_person_data'>
                                    <h3 className='review_person_name'>Steve Jobs</h3>
                                    <h3 className='review_person_review'>This is a wonderful product</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductViewDetails