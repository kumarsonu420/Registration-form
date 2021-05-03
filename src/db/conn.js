const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/Registrtationform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>
{
    console.log("connection is succes")
}).catch((e)=>{
    console.log("no connection")
})