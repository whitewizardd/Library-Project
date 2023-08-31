const {User} = require("../models/User");

class Mapper{
    static map(newUser){
        let user = new User();
        user.name=newUser.name
        user.email=newUser.email
        user.password=newUser.password
        user.phoneNumber=newUser.phoneNumber
        user.interest=newUser.interest
        user.isLoggedIn=false
        return user;
    }
}
module .exports = {Mapper}