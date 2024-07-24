const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    icon: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const user = mongoose.model("icons", userSchema);

module.exports = user;