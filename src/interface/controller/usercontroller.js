class usercontroller {
    constructor(createuserusercase){
        this.createuserusercase = createuserusercase;
    }


async createUser(req,res){
    console.log(req.body);
    
    const {name ,email} = req.body;
    const  user = await this.createuserusercase.execute(name,email);
    res.json(user)
}
}
module.exports=usercontroller;