const express = require("express")
const usercontroller = require("./src/interface/controller/usercontroller")
const memoryuserrepository = require("./src/framework/database/memoryuserrepository")
const createuser = require("./src/use_case/createuser")


const app = express()
app.use(express.json())

const userepository = new memoryuserrepository();
const  createusercase = new createuser(userepository)
const Usercontrol = new usercontroller(createusercase)

app.post('/user',(req,res) =>Usercontrol.createUser(req,res));


app.listen(3003,()=>{
    console.log("the server is running on 3003");
    
})
