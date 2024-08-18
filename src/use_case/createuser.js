const User = require("../entities/user")

class createuser{
    constructor(userepository){
        this.userepository = userepository
    }


execute( name,email) {
    const user = new User(null, name,email)
    return this.userepository.save(user) 
}
}

module.exports = createuser;
