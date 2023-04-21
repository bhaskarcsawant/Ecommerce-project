import React, { useState } from 'react'
import './AddProductModule.css'
import close from './assets/close.png'
import { useDispatch } from 'react-redux';
import { createProduct } from '../actions/productsAction';

function AddProductModule() {
      const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [name, setName] = useState('')
    const [descreption, setDescreption] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(10);
    const [category, setCategory] = useState("T-Shirt");
    const [stock, setStock] = useState(10);
    const [succes, setSucces] = useState('');


    let productData = {
        name,
        descreption,
        brand,
        price : Number(price),
        images,
        category,
        stock : Number(stock)
    }
  const handleCreateProduct = () => {
      console.log(images)
        dispatch(createProduct(productData));
        setSucces('Inserted Successfully');
        setTimeout(() => setSucces(),2000);
    }
    return (
      <div className="AddProductModuleContainer">
        <div className="AddProductModuleHeaderContainer">
          <div className="ModuleHeaderContainer">
            <h2 className="AddProductModuleHeader1">Create Product</h2>
          </div>
          <button
            id="createProductBt"
            type="button"
            onClick={() => handleCreateProduct()}
          >
            {/* <img className='exportIcon' src={exportIcon} alt="" /> */}
            Create Product <span id="plusIcon">+</span>
          </button>
        </div>
        <div className="AddProductModuleFormContainer">
          <div className="AddProductModuleForm">
            <div>
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product name:
              </h2>
              <input
                type="text"
                className="AddProductModuleFormInput"
                name="productname"
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product price:
              </h2>
              <input
                type="number"
                className="AddProductModuleFormInput"
                name="productname"
                placeholder="Enter product price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product brand:
              </h2>
              <input
                type="text"
                className="AddProductModuleFormInput"
                name="productname"
                placeholder="Enter product brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>
          <div className="AddProductModuleForm1">
            <div>
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product descreption:
              </h2>
              <textarea
                className="AddProductModuleFormTextarea"
                cols="108"
                rows="8.5"
                onChange={(e) => setDescreption(e.target.value)}
              ></textarea>
            </div>

            <div>
              {/* <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product sub-category:</h2>

                        <select name="" id="" defaultValue="6" className='AddProductModuleFormDropdown'>
                            <option value="6">Printed</option>
                            <option value="24">Shirts</option>
                            <option value="60">Jeans</option>

                        </select> */}
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product category:
              </h2>

              <select
                name=""
                id=""
                defaultValue="6"
                className="AddProductModuleFormDropdown"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="T-Shirt">T-Shirts</option>
                <option value="Shirts">Shirts</option>
                <option value="jeans">Jeans</option>
              </select>
              {/* <div style={{ marginTop: '2rem' }}>
                            <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product size:</h2>
                            <div className='checkboxContainer'>

                                <input type="checkbox" className='AddProductModuleFormCheckbox' />
                                <h3 className='AddProductModuleFormProductSize'>S</h3>
                                <input type="checkbox" className='AddProductModuleFormCheckbox' />
                                <h3 className='AddProductModuleFormProductSize'>M</h3>

                                <input type="checkbox" className='AddProductModuleFormCheckbox' />
                                <h3 className='AddProductModuleFormProductSize'>L</h3>
                                <input type="checkbox" className='AddProductModuleFormCheckbox' />
                                <h3 className='AddProductModuleFormProductSize'>XL</h3>


                            </div>
                        </div> */}
              <div>
                <h2
                  style={{ marginTop: "2rem" }}
                  className="AddProductModuleFormHeader"
                  htmlFor="productname"
                >
                  Stock quantity:
                </h2>
                <input
                  type="number"
                  className="AddProductModuleFormInput"
                  name="productname"
                  placeholder="Enter stock quantity"
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="AddProductModuleForm1">
            <div>
              <h2 className="AddProductModuleFormHeader" htmlFor="productname">
                Product images:
              </h2>

              <input
                type="text"
                className="AddProductModuleFormInput"
                name="productname"
                placeholder="Enter image url"
                onChange={(e) => setImages([       {
                  public_id: "sample",
                  url: e.target.value,
                }])}
              />
            </div>

            <div className="PreviewImgContainer">
              {images ? (
                <h2
                  className="AddProductModuleFormHeader"
                  htmlFor="productname"
                >
                  Preview:
                </h2>
              ) : null}

              {images
                ? images.map((item) => {
                    return (
                      <div key={item}>
                        <img
                          className="previewImageCloseIcon"
                          // key={item}
                          src={close}
                          alt=""
                        ></img>
                        <img
                          className="previewImage"
                          key={item}
                          src={item.url}
                          alt=""
                        ></img>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        {succes ? (
          <div
            className="success"
            style={{ position: "absolute", top: "2rem", left: "40%" }}
          >
            {succes}
          </div>
        ) : null}
      </div>
    );
}

export default AddProductModule