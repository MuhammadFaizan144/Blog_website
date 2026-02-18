const User = require('../models/user-model')
const home = async (req, res) => {
    try {
        res.status(200).send("Hello")
    } catch (error) {
        res.status(500).send('not hello')
    }
}
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const userExist = await User.findOne({ email })

        if (userExist) {
            res.status(400).json({ message: "email already exist" })
        }
        const userCreated = await User.create({ username, email, phone, password })
        res.status(200).json({ message: userCreated })

    } catch (error) {
        res.status(500).send({ message: "not register" })
    }
}
module.exports = { home, register }