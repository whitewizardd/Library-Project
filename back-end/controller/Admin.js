const {Person} = require("./Person");
class  Admin extends Person{
    #password = "admin1212"
    #userName = "admin";
    #isLogged = false;
    constructor() {
        super();
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
    addBookToLibrary(library,book) {
        return library.addBook(book);
    }
    countNumberOFBooks() {
        // return this.count();
    }
    removeBook(library, title){
        return library.removeBook(title)
    }
}
module.exports = {Admin}