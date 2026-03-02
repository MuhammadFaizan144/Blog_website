const express=require('express')
const router=express.Router()
const contactController=require('../controller/contact-controllers')
router.route('/contact').post(contactController)
module.exports=router