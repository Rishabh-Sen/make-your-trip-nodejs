const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/rishabhsen",{

// useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesful");

}).catch((error)=>{
     console.log(error);
})