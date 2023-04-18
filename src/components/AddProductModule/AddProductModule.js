import React, { useState } from 'react'
import './AddProductModule.css'
import close from './assets/close.png'

function AddProductModule() {

    const [imageFiles, setImageFiles] = useState()

    const handleImageUpload = (event) => {
        console.log(event.target.files)
    }
    const onImageChange = (event) => {
        if (event.target.files) {
            let arr = event.target.files
            let ar1 = []
            for (let i = 0; i < arr.length; i++) {
                ar1.push(URL.createObjectURL(arr[i]))
            }
            setImageFiles(ar1);
        }
    }
    return (
        <div className="AddProductModuleContainer">
            <div className="AddProductModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='AddProductModuleHeader1'>Create Product</h2>
                </div>
                <button id='createProductBt' type='button'>
                    {/* <img className='exportIcon' src={exportIcon} alt="" /> */}
                    Create Product <span id='plusIcon'>+</span>
                </button>
            </div>
            <div className="AddProductModuleFormContainer">
                <div className='AddProductModuleForm'>
                    <div>
                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product name:</h2>
                        <input type="text" className='AddProductModuleFormInput' name='productname' placeholder='Enter product name' />
                    </div>
                    <div>
                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product price:</h2>
                        <input type="number" className='AddProductModuleFormInput' name='productname' placeholder='Enter product price' />
                    </div>
                    <div>
                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product brand:</h2>
                        <input type="text" className='AddProductModuleFormInput' name='productname' placeholder='Enter product brand' />
                    </div>
                </div>
                <div className='AddProductModuleForm1'>
                    <div>
                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product descreption:</h2>
                        <textarea className='AddProductModuleFormTextarea' cols="108" rows="8.5"></textarea>
                    </div>
                    
                    <div>
                        {/* <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product sub-category:</h2>

                        <select name="" id="" defaultValue="6" className='AddProductModuleFormDropdown'>
                            <option value="6">Printed</option>
                            <option value="24">Shirts</option>
                            <option value="60">Jeans</option>

                        </select> */}
                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product category:</h2>

                        <select name="" id="" defaultValue="6" className='AddProductModuleFormDropdown'>
                            <option value="6">T-Shirts</option>
                            <option value="24">Shirts</option>
                            <option value="60">Jeans</option>

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
                        <h2 style={{ marginTop: '2rem' }} className='AddProductModuleFormHeader' htmlFor="productname">Stock quantity:</h2>
                        <input type="number" className='AddProductModuleFormInput' name='productname' placeholder='Enter stock quantity' />
                    </div>
                    </div>
                </div>
                <div className='AddProductModuleForm1'>
                    <div>

                        <h2 className='AddProductModuleFormHeader' htmlFor="productname">Product images:</h2>

                        <input className='imageUpload' type="file" multiple onChange={onImageChange} />
                    </div>

                    <div className='PreviewImgContainer'>
                        {imageFiles ? (<h2 className='AddProductModuleFormHeader' htmlFor="productname">Preview:</h2>) : null}

                        {imageFiles ? imageFiles.map((item) => {
                            return (
                                <div>
                                    <img className="previewImageCloseIcon" key={item} src={close} alt=""></img>
                                    <img className='previewImage' key={item} src={item} alt=""></img>
                                </div>
                            )

                        }) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductModule