const User = require('../models/user-model')
const bcrypt=require('bcrypt')
const home = async (req, res) => {
    try {
        res.status(200).send("Hello")
    } catch (error) {
        res.status(500).send('not hello')
    }
}

const login=async (req,res) => {
    try {
        const{email,password}=req.body
        const userExist=await User.findOne({email})
        if(!userExist){
            return res.status(400).json({message:"email not exist"})
        }
        const user=await userExist.comparePassword(password)
        if (user) {
            res.status(200).json({
                message:"login successfully",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
            })
        } else {
            res.status(400).json({message:"invalid password"})
        }
    } catch (error) {
        res.status(500).send("not login")
    }
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body
        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({ message: "email already exist" })
        }
        const userCreated = await User.create({ username, email, phone, password })

        res.status(200).json({ 
            message: "registered successfully",
            token: await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        })

    } catch (error) {
        res.status(500).send({ message: "not register" })
    }
}
module.exports = { home, register ,login}