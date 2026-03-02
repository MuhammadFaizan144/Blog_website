const express=require('express')
const router=express.Router()
const authController=require('../controller/auth-controller')
const signSchema=require('../validator/auth-validator')
const validate=require('../middleware/validator-middleware')
router.route('/').get(authController.home)
router.route('/login').post(authController.login)
router.route('/register').post(validate(signSchema),authController.register)
module.exports=router