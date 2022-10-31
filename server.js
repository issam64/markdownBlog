const express = require('express')
const articleRouter = require('./routes/articles ')
const mongoose = require("mongoose")
const Article  = require("./modules/article")
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb+srv://issam:issam12345@cluster0.splmp11.mongodb.net/test')
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:false})) 
//adding a view enging for hhtml 
app.set("view engine","ejs")
//creating routes
app.get("/",async (req,res)=>{
    const articles =await Article.find().sort({createdAt:-1})
 res.render("articles/index",{articles : articles})
})



app.use("/articles",articleRouter)
setTimeout(() => {  console.log(mongoose.connection.readyState); }, 5000);


app.listen(3000,()=>{
    console.log("listenning at port : 3000")
})



