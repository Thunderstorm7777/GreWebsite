const express=require("express");

const app=express();
const cors=require("cors")
app.use(cors());
const bcrypt=require("bcryptjs")

const jwt = require("jsonwebtoken");
const JWT_SECRET="vuyccuyg63f36d3fgiygfiu4w974yfouh4to4htoiu4fh4iuf"


const mongoose=require("mongoose");

const mongoUrl="mongodb://0.0.0.0:27017/local";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database")}).catch((e)=>{console.log(e)})


app.use(express.json());
app.listen(5000,()=>{console.log("Connected to server")});

require("./userdetail.js");
const user=mongoose.model("UserInfo");


app.post("/register", async(req,res)=>{
    const {fname,lname,email,password}=req.body;
     const encryptedpass=await bcrypt.hash(password,10)
    try {
        // const olduser=user.findOne({email})
       
        // if(olduser)
        // {
        //    console.log("hello kunal")
        //   return  res.json({error:"User Exists"})
           
        // }
        await user.create({
            fname,lname,email,password:encryptedpass
        })
    
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"}); 
    }
})



app.post("/login-user", async (req,res)=>{
    const {email , password } =req.body
    const user1 = await user.findOne({email});

    if(!user1)
    {
        return req.json({error:"user not found"})
    }
    if( await bcrypt.compare(password,user1.password))
    {
        const token =jwt.sign({},JWT_SECRET)

        if(res.status(201)){
           return res.json ({status:"ok",data:token}) 
        }
        else{
            return res.json({error:"error"})
        }
    }
    res.json({status:"error",error:"Invalid Password"})
}) 



  
