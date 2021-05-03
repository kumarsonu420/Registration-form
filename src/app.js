const express = require("express")
const app= express();
const path= require("path")
const hbs= require("hbs")

require("./db/conn")
const register= require("./models/userregister")

const port = process.env.PORT || 4000

const static_path= path.join(__dirname,"../public")
const templets_path= path.join(__dirname,"../templets/views")
const partial_path= path.join(__dirname,"../partials/header")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",templets_path)
hbs.registerPartials(partial_path)


app.get("/",(req,res) =>
{
    res.render("index")
})

app.get("/register",(req,res) =>
{
    res.render("register")
})

app.get("/register",async(req,res) =>
{
    try{
        console.log(req.body.name)

    }catch(error)
    {
        res.send(400).send(error)
    }
})

app.listen(port,() =>{
    console.log(`server side ${port}`)
})