class memoryuserrepository{
    constructor(){
        this.user = [];
    }

    save(user){
        user.id = this.users?.length + 1;
        this.user.push(user);
        return user;
    }
}

module.exports = memoryuserrepository;
