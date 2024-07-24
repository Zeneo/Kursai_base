const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 500
    },
    favorites: {
        type: Array,
        required: true,
        default: []
    },
    icons: {
        type: [{
            icon: {
                type: String,
                required: true
            }
        }],
        required: true
    }
});

const user = mongoose.model("users", userSchema);

module.exports = user;