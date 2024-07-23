
import axios from 'axios'
import React, { useState } from 'react'
import { redirect, useLoaderData, useParams } from 'react-router-dom'
// import SingleProduct from './SingleProduct'

function ProductDetails() {
    // const { id } = useParams()
    const singleProduct = useLoaderData()
    const [value, setValue] = useState(singleProduct)
    const [edit, setEdit] = useState(false)
    const customHeight = {
        height: "auto"
    }

    function handleChange(e) {
        const { value, name } = e.target
        setValue(pre => {
            return { ...pre, [name]: value }
        })
    }

    function handleEdit() {
        setEdit(!edit);
        // !edit && setValue(singleProduct)
    }

    const handleSubmit = async () => {
        // console.log(value)
        try {
            const update = await axios.put(`http://localhost:3000/api/products/${value._id}`, value)
            alert("Update successfully")
            setEdit(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border bg-primary-subtle'>
            <div className='py-3'>
                <h3 className='text-center'>Product Details</h3>
                {/* <SingleProduct data={singleProduct} /> */}

                <div className="container w-75 mt-4">
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input
                            readOnly={!edit}
                            type="text"
                            className="form-control"
                            id="productName"
                            name="productName"
                            value={value.productName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="manufacture" className="form-label">Manufacture</label>
                        <input
                            readOnly={!edit}
                            type="text"
                            className="form-control"
                            id="manufacture"
                            name="manufacture"
                            value={value.manufacture}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rate" className="form-label">Rate</label>
                        <input
                            readOnly={!edit}
                            type="number"
                            className="form-control"
                            id="rate"
                            name="rate"
                            value={value.rate}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expiry" className="form-label">Expiry</label>
                        <input
                            readOnly={!edit}
                            type="date"
                            className="form-control"
                            id="expiry"
                            name="expiry"
                            value={value.expiry.split("T")[0]}
                            onChange={handleChange} />
                    </div>
                    {/* {console.log(} */}
                    <div className="mb-3">
                        <label htmlFor="batchNo" className="form-label">Batch No.</label>
                        <input
                            readOnly={!edit}
                            type="text"
                            className="form-control"
                            id="batchNo"
                            name="batchNo"
                            value={value.batchNo}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="qtyAvailable" className="form-label">Qty. Available</label>
                        <input
                            readOnly={!edit}
                            type="number"
                            className="form-control"
                            id="qtyAvailable"
                            name="qtyAvailable"
                            value={value.qtyAvailable}
                            onChange={handleChange} />
                    </div>
                    <div className="container text-center">
                        <button
                            onClick={handleEdit}
                            className='btn btn-primary me-2'
                        >
                            {!edit ? "Edit" : "Cancel"}
                        </button>
                        <button
                            className='btn btn-success'
                            disabled={!edit}
                            onClick={handleSubmit}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

// new

// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import axios from 'axios';

// function ProductDetails() {
//     const singleProduct = useLoaderData();
//     const [value, setValue] = useState(singleProduct);
//     const [edit, setEdit] = useState(false);

//     function handleChange(e) {
//         const { value, name } = e.target;
//         setValue(prev => ({ ...prev, [name]: value }));
//     }

//     function handleEdit() {
//         setEdit(!edit);
//     }

//     const handleSubmit = async () => {
//         try {
//             await axios.put(`http://localhost:3000/api/products/${value._id}`, value);
//             alert('Update successfully');
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container shadow-lg my-4 rounded mh-100 border">
//             <div className="py-3">
//                 <h3 className="text-center">Product Details</h3>
//                 <div className="container w-75 mt-4">
//                     <div className="mb-3">
//                         <label htmlFor="productName" className="form-label">Product Name</label>
//                         <input
//                             readOnly={!edit}
//                             type="text"
//                             className="form-control"
//                             id="productName"
//                             name="productName"
//                             value={value.productName}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="manufacture" className="form-label">Manufacture</label>
//                         <input
//                             readOnly={!edit}
//                             type="text"
//                             className="form-control"
//                             id="manufacture"
//                             name="manufacture"
//                             value={value.manufacture}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="rate" className="form-label">Rate</label>
//                         <input
//                             readOnly={!edit}
//                             type="number"
//                             className="form-control"
//                             id="rate"
//                             name="rate"
//                             value={value.rate}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="expiry" className="form-label">Expiry</label>
//                         <input
//                             readOnly={!edit}
//                             type="date"
//                             className="form-control"
//                             id="expiry"
//                             name="expiry"
//                             value={value.expiry.split("T")[0]}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="batchNo" className="form-label">Batch No.</label>
//                         <input
//                             readOnly={!edit}
//                             type="text"
//                             className="form-control"
//                             id="batchNo"
//                             name="batchNo"
//                             value={value.batchNo}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="qtyAvailable" className="form-label">Qty. Available</label>
//                         <input
//                             readOnly={!edit}
//                             type="number"
//                             className="form-control"
//                             id="qtyAvailable"
//                             name="qtyAvailable"
//                             value={value.qtyAvailable}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="container text-center">
//                         <button onClick={handleEdit} className="btn btn-primary me-2">
//                             {!edit ? "Edit" : "Cancel"}
//                         </button>
//                         <button className="btn btn-success" disabled={!edit} onClick={handleSubmit}>
//                             Update
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductDetails;


// export const productDetailsLoader = async ({ params }) => {
//     const { id } = params
//     const response = await fetch("http://localhost:3000/api/products/" + id)
//     const singleProduct = await response.json()
//     if (!singleProduct.ok) {
//         throw Error("Could not found that product")
//     }
//     return singleProduct
// }

// new

export const productDetailsLoader = async ({ params }) => {
    const { id } = params;
    try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!response.ok) {
            throw new Error('Could not fetch the product details');
        }
        const singleProduct = await response.json();
        return singleProduct;
    } catch (error) {
        console.error('Error loading product details:', error);
        return null; // Or handle the error appropriately
    }
};

