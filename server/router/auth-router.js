const express=require('express')
const router=express.Router()
const authController=require('../controller/auth-controller')
const {signSchema,loginSchema}=require('../validator/auth-validator')
const validate=require('../middleware/validator-middleware')
router.route('/').get(authController.home)
router.route('/login').post(validate(loginSchema),authController.login)
router.route('/register').post(validate(signSchema),authController.register)
module.exports=router