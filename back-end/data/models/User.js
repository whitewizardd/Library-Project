// const { Book } = require("../models/Book.js");
const {Person} = require("../models/Person");


class  User extends Person{
    #password
    #username
    #listOfBorrowedBook = []
    constructor() {
        super();
    }
    get password() {
        return this.#password;
    }
    set password(value) {
        this.#password = value;
    }
    get username() {
        return this.#username;
    }
    set username(value) {
        this.#username = value;
    }
    get toString(){
        return this.super + " user name" + this.username;
    }
}
module .exports = {User}