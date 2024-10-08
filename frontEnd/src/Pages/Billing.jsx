// // import React, { useContext } from 'react'
// // import Search from "../components/Search/Search"
// // import Table from '../components/Tabble/Table'
// // import { BillContext } from '../Context/PharmaContext'

// import { useContext, useState } from "react"
// import Table from "../Components/Table/Table"
// // import PharmaContext from "../../../src/Context/PharmaContext"
// import { PharmaProduct } from "../Components/Context/ProductContext";
// import axios from "axios"

// function Billing() {
//     const [customer, setCustomer] = useState({})
//     const { billingItems, setBillingItems } = useContext(PharmaProduct);

//     function handleCustomer(e) {
//         const { name, value } = e.target
//         setCustomer(pre => {
//             return (
//                 { ...pre, [name]: value }
//             )
//         })
//     }

//     const handleSubmit = async () => {

//         const items = billingItems.map(item => {
//             return {
//                 productId: item._id,
//                 quantity: item.qty
//             }
//         })

//         try {
//             const customerData = await axios.post(`http://localhost:3000/api/customer`, customer)
//             const billItems = await axios.post(`http://localhost:3000/api/bill`, { customer: customerData.data._id, order: items })
//         } catch (error) {
//             console.log(error)
//         }

//         setBillingItems([])
//     }

//     return (
//         <div className="container my-4 py-3 min-vh-100 border shadow-lg rounded ">
//             <div className="row g-2">
//                 <div className="col col-md-6 col-sm-12">
//                     <p className='h6'>From</p>
//                     <h5>City Medical Store</h5>
//                     <div>Shop No. 55, Shohda Complex</div>
//                     <div>Opp. Mohammad Ali sarai Hostel</div>
//                     <div>Mominpura Nagpur - 440018.</div>
//                 </div>
//                 <div className="col col-md-6 col-sm-12">
//                     <p className='h6'>To</p>
//                     <div class="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder='Patient Name'
//                             class="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name='customerName'
//                             value={customer.customerName}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                     <div class="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder='Contact No.'
//                             class="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name='mobNo'
//                             value={customer.mobNo}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                     <div class="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder='Address'
//                             class="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name='add'
//                             value={customer.add}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="container border rounded mt-2">
//                 <h4 className='my-2'>List of billing products</h4>
//                 <Table />
//             </div>
//             <div className="container text-center mt-3">
//                 <button
//                     className='btn btn-primary'
//                     onClick={handleSubmit}
//                 >Submit</button>
//             </div>
//         </div>
//     )
// }

// export default Billing

// new

// import { useContext, useState } from "react";
// import Table from "../Components/Table/Table";
// import { PharmaProduct } from "../Components/Context/ProductContext";
// import axios from "axios";

// function Billing() {
//     const [customer, setCustomer] = useState({
//         customerName: "",
//         mobNo: "",
//         add: ""
//     });
//     const { billingItems, setBillingItems } = useContext(PharmaProduct);

//     function handleCustomer(e) {
//         const { name, value } = e.target;
//         setCustomer(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     }

//     const handleSubmit = async () => {
//         // Validation for customer details and billing items
//         if (!customer.customerName || !customer.mobNo || !customer.add) {
//             alert("Please fill in all customer details");
//             return;
//         }

//         if (billingItems.length === 0) {
//             alert("Please add items to the bill");
//             return;
//         }

//         const items = billingItems.map(item => ({
//             productId: item._id,
//             quantity: item.qty
//         }));

//         try {
//             const customerData = await axios.post("http://localhost:3000/api/customer", customer);
//             await axios.post("http://localhost:3000/api/bill", {
//                 customer: customerData.data._id,
//                 order: items
//             });
//             alert("Bill submitted successfully");
//         } catch (error) {
//             console.log("Error while submitting the bill", error);
//         }

//         setBillingItems([]);
//         setCustomer({
//             customerName: "",
//             mobNo: "",
//             add: ""
//         });
//     };

//     return (
//         <div className="container my-4 py-3 min-vh-100 border shadow-lg rounded">
//             <div className="row g-2">
//                 <div className="col col-md-6 col-sm-12">
//                     <p className="h6">From</p>
//                     <h5>Pharmacy Store</h5>
//                     <div>Sns College Of Technology</div>
//                     <div>Sathy Main road , Saravanampatti</div>
//                     <div>Coimbatore - 641049.</div>
//                 </div>
//                 <div className="col col-md-6 col-sm-12">
//                     <p className="h6">To</p>
//                     <div className="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder="Patient Name"
//                             className="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name="customerName"
//                             value={customer.customerName}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                     <div className="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder="Contact No."
//                             className="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name="mobNo"
//                             value={customer.mobNo}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                     <div className="input-group input-group-sm mb-3">
//                         <input
//                             type="text"
//                             placeholder="Address"
//                             className="form-control"
//                             aria-label="Sizing example input"
//                             aria-describedby="inputGroup-sizing-sm"
//                             name="add"
//                             value={customer.add}
//                             onChange={handleCustomer}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="container border rounded mt-2">
//                 <h4 className="my-2">List of billing products</h4>
//                 <Table />
//             </div>
//             <div className="container text-center mt-3">
//                 <button className="btn btn-primary" onClick={handleSubmit}>
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Billing;

// new again

import { useContext, useState } from "react";
import Table from "../Components/Table/Table";
import { PharmaProduct } from "../Components/Context/ProductContext";
import axios from "axios";

function Billing() {
    const [customer, setCustomer] = useState({
        customerName: "",
        mobNo: "",
        add: ""
    });
    const { billingItems, setBillingItems } = useContext(PharmaProduct);

    function handleCustomer(e) {
        const { name, value } = e.target;
        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        // Validation for customer details and billing items
        if (!customer.customerName || !customer.mobNo || !customer.add) {
            alert("Please fill in all customer details");
            return;
        }

        if (billingItems.length === 0) {
            alert("Please add items to the bill");
            return;
        }

        const items = billingItems.map(item => ({
            productId: item._id,
            quantity: item.qty
        }));

        try {
            const customerData = await axios.post("http://localhost:3000/api/customer", customer);
            await axios.post("http://localhost:3000/api/bill", {
                customer: customerData.data._id,
                order: items
            });
            alert("Bill submitted successfully");
        } catch (error) {
            console.log("Error while submitting the bill", error);
            alert("Error while submitting the bill");
        }

        // Clear the form and billing items after successful submission
        setBillingItems([]);
        setCustomer({
            customerName: "",
            mobNo: "",
            add: ""
        });
    };

    return (
        <div className="container my-4 py-3 min-vh-100 border shadow-lg rounded bg-primary-subtle">
            <div className="row g-2">
                <div className="col col-md-6 col-sm-12">
                    <p className="h6">From</p>
                    <h5>Pharmacy Store</h5>
                    <div>Sns College Of Technology</div>
                    <div>Sathy Main road, Saravanampatti</div>
                    <div>Coimbatore - 641049.</div>
                </div>
                <div className="col col-md-6 col-sm-12">
                    <p className="h6">To</p>
                    <div className="input-group input-group-sm mb-3">
                        <input
                            type="text"
                            placeholder="Patient Name"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="customerName"
                            value={customer.customerName}
                            onChange={handleCustomer}
                        />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <input
                            type="text"
                            placeholder="Contact No."
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="mobNo"
                            value={customer.mobNo}
                            onChange={handleCustomer}
                        />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <input
                            type="text"
                            placeholder="Address"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name="add"
                            value={customer.add}
                            onChange={handleCustomer}
                        />
                    </div>
                </div>
            </div>
            <div className="container border rounded mt-2">
                <h4 className="my-2">List of billing products</h4>
                <Table />
            </div>
            <div className="container text-center mt-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Billing;

// one more new
