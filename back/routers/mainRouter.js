const express = require('express')
const Router = express.Router()
const {
    register,
    login,
    createRecipe,
    getRecipes,
    rateRecipe,
    findRecipes
} = require("../controllers/mainController")

const {
    loginValidate,
    registerValidate,
} = require("../midleware/validators")

const authMiddle = require("../midleware/auth")

Router.post("/register", registerValidate, register)
Router.post("/login", loginValidate, login)

Router.post("/createRecipe", authMiddle, createRecipe)
Router.get("/recipes", getRecipes)

Router.post("/rateRecipe", authMiddle, rateRecipe)

Router.get("/find/:ingredient", findRecipes)

module.exports = Router