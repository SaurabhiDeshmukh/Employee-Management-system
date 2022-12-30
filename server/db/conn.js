const { ThemeContext } = require("@emotion/react");
const mongoose = require ("mongoose");

const DB = "mongodb+srv://saurabhi19deshmukh:8605886150@employee-management.1gy2nzf.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connected started")).catch((error)=>console.log(error.message));