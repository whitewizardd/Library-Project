const {Person} = require("../models/Person");

class  Admin extends Person{
    #password;
    #userName;
    constructor() {
        super();
    }
    set dateOfBirth(value) {
        super.dateOfBirth = value;
    }
    set address(value){
        super.address=value
    }
    set sex(value) {
        super.sex = value;
    }
    set lastName(value) {
        super.lastName = value;
    }
    set firstName(value) {
        super.firstName = value;
    }
    set phoneNumber(value) {
        super.phoneNumber = value;
    }
    get password() {
        return this.#password;
    }
    set password(value) {
        this.#password = value;
    }
    get userName() {
        return this.#userName;
    }
    set userName(value) {
        this.#userName = value;
    }
}
module.exports = {Admin}