// importing mongoose
const mongoose = require('mongoose')


// creating the schema (declaring the type of data will contain in OrderSchema)
const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: '' },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Initiated', required: true }
}, { timestamps: true }) //it will give the created and modified date/time

mongoose.models = {} //whenever the Product.js imported it will try to create and model and give error "cannot overwrite" so we are creating empty model to avoide that error

// exporting so that we can use
export default mongoose.model("Order", OrderSchema)