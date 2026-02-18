const mongoose=require('mongoose')
const URI=process.env.MONGODB_URL
const connectDB=async () => {
    try {
        await mongoose.connect(URI)
        console.log("connection succes")
    } catch (error) {
        console.error("database connection failure")
        process.exit(0)
    }
}
module.exports=connectDB