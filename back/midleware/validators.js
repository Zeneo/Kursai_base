const resSend = require("../plugins/sendRes")


module.exports = {
    loginValidate: (req, res, next) => {
        const {username, password} = req.body

        if(!username)
            return resSend(res, false, "no username key", null)

        if(!password)
            return resSend(res, false, "no password key", null)

        if (username.length > 20 || username.length < 3)
            return resSend(res, false, "bad username", null)

        if (password.length > 20 || password.length < 3)
            return resSend(res, false, "bad username", null)

        next()
    },
    registerValidate: (req, res, next) => {
        const {username, passwordOne, passwordTwo} = req.body

        if(!username)
            return resSend(res, false, "no username key", null)

        if(!passwordOne)
            return resSend(res, false, "no password key", null)

        if(!passwordTwo)
            return resSend(res, false, "no password key", null)

        if (username.length > 20 || username.length < 3)
            return resSend(res, false, "bad username", null)

        if (passwordOne.length > 20 || passwordOne.length < 3)
            return resSend(res, false, "bad username", null)

        if(passwordOne !== passwordTwo) {
            return resSend(res, false, "passwords should match", null)
        }

        next()
    },
    postValidator: (req, res, next) => {
        const {image, title, description} = req.body

        if(!image)
            return resSend(res, false, "missing imaage key", null)

        if(!title)
            return resSend(res, false, "missing title key", null)

        if(!description)
            return resSend(res, false, "missing description key", null)

        if(!image.includes("http"))
            return resSend(res, false, "bad image url", null)

        if(title.length > 100 || title.length < 3)
            return resSend(res, false, "bad title length", null)

        if(description.length > 100 || description.length < 3)
            return resSend(res, false, "bad description length", null)

        next()
    }
}