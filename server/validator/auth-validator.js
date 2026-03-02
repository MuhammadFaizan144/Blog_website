const zod=require("zod");
const signSchema=zod.object({
    username:zod
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters long"})
    .max(255,{message:"Name must be less than 255 charcters long"}),
    email:zod
    .string({required_error:"Email is required"})
    .email({message:"Invalid email address"})
    .trim()
    .min(3,{message:"Email must be at least 3 characters long"})
    .max(255,{message:"Email must be less than 255 charcters long"}),
    phone:zod
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least 10 characters long"})
    .max(20,{message:"Phone must be less than 20 charcters long"}),
    password:zod
    .string({required_error:"Password is required"})
    .trim()
    .min(3,{message:"Password must be at least 3 characters long"})
    .max(50,{message:"Password must be less than 50 charcters long"}),
})
const loginSchema=zod.object({
    email:zod
    .string({required_error:"Email is required"})
    .email({message:"Invalid email address"})
    .trim()
    .min(3,{message:"Email must be at least 3 characters long"})
    .max(255,{message:"Email must be less than 255 charcters long"}),
    password:zod
    .string({required_error:"Password is required"})
    .trim()
    .min(3,{message:"Password must be at least 3 characters long"})
    .max(50,{message:"Password must be less than 50 charcters long"}),
})
module.exports={signSchema,loginSchema}