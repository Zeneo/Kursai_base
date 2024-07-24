const resSend = require("../plugins/sendRes")
const userDb = require("../schemas/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const recipeDb = require("../schemas/recipeShema")

const emojies = [
    "🍎",
    "🍌",
    "🚗",
    "📖",
    "💻",
    "📷",
    "🚲",
    "⏰",
    "🎸",
    "✏️",
    "🍕",
    "🍪",
    "📱",
    "🎧",
    "🎥",
    "🏠",
    "🖨️",
    "🖊️",
    "🖼️",
    "🖥️",
    "🎒",
    "🔑",
    "🛏️",
    "🕶️",
    "🖍️",
    "📺",
    "📷",
    "📦",
    "🕹️",
    "🎮",
    "🛴",
    "🚀",
    "🔋",
    "📓",
    "🗄️",
    "🔧",
    "🧴",
    "🧸",
    "🧺",
    "🧽",
    "🧹"
]

function getRandomEmojies() {
    const result = []
    for (let i = 0; i < 10; i++) {
        const item = emojies[Math.round(Math.random() * emojies.length - 1)]

        result.push({
            icon: item,
        })
    }

    return result
}


module.exports = {
    register: async (req, res) => {
        const {username, passwordOne: password} = req.body

        const userExists = await userDb.findOne({username})

        if (userExists) {
            return resSend(res, false, "user name already registered", null)
        }

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new userDb({
            username,
            password: passwordHash,
            icons: getRandomEmojies(),
            image: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
        })

        await newUser.save()

        return resSend(res, true, null, null)
    },
    login: async (req, res) => {
        const {username, password} = req.body

        const user = await userDb.findOne({username})

        if (!user)
            return resSend(res, false, "bad credentials", null)

        const passValid = await bcrypt.compare(password, user.password)

        if (passValid) {
            // USER LOGIN
            const data = {
                id: user._id,
                username: user.username,
            }

            const token = jwt.sign(data, process.env.JWT_SECRET)

            data.image = user.image
            data.icons = user.icons
            data.money = user.money

            return resSend(res, true, null, {token, user: data})

        } else {
            return resSend(res, false, "bad credentials", null)
        }
    },
    createRecipe: async (req, res) => {
        const {images, ingredients, title, description, user} = req.body

        const recipe = new recipeDb({
            images,
            ingredients,
            title,
            description,
            owner: user.username
        })

        await recipe.save()

        return resSend(res, true, null, null)
    },
    getRecipes: async (req, res) => {
        const recipes = await recipeDb.find()
        return resSend(res, true, null, recipes)
    },
    rateRecipe: async (req, res) => {
        const {rate, id, user} = req.body

        const currentRate = {
            rate,
            username: user.username
        }

        const recipe = await recipeDb.findOne({_id: id})

        const alreadyRated = recipe.rates.find(x => x.username === user.username)

        if(alreadyRated) return resSend(res, false, "already rated", null)

        const countRating = (arr) => {
            let result = 0
            arr.map(x => result += x.rate)

            return result / arr.length
        }
        const recipeRating = countRating([...recipe.rates, currentRate])

        await recipeDb.findOneAndUpdate(
            {_id: id},
            {$push: {rates: currentRate}, $set: {rating: recipeRating}}
        )

        return resSend(res, true, null, null)
    },
    findRecipes: async (req, res) => {
        const {ingredient} = req.params

        const regex = new RegExp(ingredient, 'i');

        const recipes = await recipeDb.find({ingredients: { $elemMatch: { $regex: regex } }})

        return resSend(res, true, null, recipes)
    }
}