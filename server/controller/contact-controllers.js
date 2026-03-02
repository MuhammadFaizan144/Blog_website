const contactForm=require('../models/contact-model')
const contact=async (req,res) => {
    try {
        const response=req.body
        await contactForm.create(response)
        return res.status(200).json({message:"contact form submitted successfully"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
}
module.exports=contact