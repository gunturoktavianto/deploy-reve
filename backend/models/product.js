import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productID: {
        type: Number,
        required: [true, "Please enter product name"],
    },
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
    },
    lenderName: {
        type: String,
        required: [true, "Please enter product description"],
    },
    lenderDom: {
        type: String,
        required: [true, "Please enter product description"],
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },
        },
    ],

    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: ["Dress", "Shirt"],
            message: "Please select correct category",
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product ||
    mongoose.model("Product", productSchema);
