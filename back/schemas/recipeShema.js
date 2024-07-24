const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    rates: {
        type: Array,
        required: false,
        default: []
    },
    owner: {
        type: String,
        required: true
    }
});

const user = mongoose.model("recipes", userSchema);

module.exports = user;