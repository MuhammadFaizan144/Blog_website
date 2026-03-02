const validate=(schema)=>async(req,res,next)=>{
    try {
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody
        next()
    } catch (err) {
        const status=422
        const message="Fill the input properly";
        const extradetails=err.issues[0].message
        console.log(extradetails)
        const error={
            status,
            message,
            extradetails
        }
        next(error)
    }
}
module.exports=validate