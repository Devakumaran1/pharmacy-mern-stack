import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produt"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const billSchema = new mongoose.Schema(
    {
        customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
        order: [orderItemSchema]
    },
    { timestamps: true }
)

export const Bill = mongoose.model("Bill", billSchema)

// new
// const express = require('express');
// const router = express.Router();
// const Customer = require('./customer'); // Adjust the path to your model
// const bill = require('./bill'); // Adjust the path to your model
// const Product = require('./products'); // Adjust the path to your model

// router.post('/bill', async (req, res) => {
//     try {
//         const { customer, order } = req.body;

//         // Create customer
//         const customerData = await Customer.create(customer);

//         // Create bill
//         const billData = await Bill.create({
//             customer: customerData._id,
//             order
//         });

//         // Update product quantities
//         for (const item of order) {
//             const product = await Product.findById(item.productId);
//             if (product) {
//                 product.qtyAvailable -= item.quantity;
//                 await product.save();
//             }
//         }

//         res.status(201).json({ message: 'Bill submitted and stock updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error while submitting the bill', error });
//     }
// });

// module.exports = router;
