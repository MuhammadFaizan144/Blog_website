const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        require:false,
    }
})
userSchema.pre("save",async function(next){
    console.log("pre method",this)
    const user=this
    if(!user.isModified("password")){
        next()
    }
    try {
        const saltRound=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(user.password,saltRound)
        user.password=hashPassword
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            id:this._id,
            email:this.email,
            isAdmin:this.isAdmin
        }
        ,process.env.JWT_SECRET_KEY,{expiresIn:'3d'})
    } catch (error) {
        console.log(error)
    }
}
const User=new mongoose.model("User",userSchema)
module.exports=User