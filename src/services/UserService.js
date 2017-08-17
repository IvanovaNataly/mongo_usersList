let $ = require("jquery");

class UserService{

    constructor() {
        this.url = "/api/users/";
    }

    getAllUsers(){
        return $.get(this.url);
    }

    getUser(id){
        return $.get(this.url+id);
    }

}

module.exports = new UserService();
