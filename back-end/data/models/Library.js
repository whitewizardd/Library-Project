const {Book} = require("./Book");
const {User} = require("./User");
const {Mapper} = require("../mapper/Mapper");
const {InvalidLoginCredential} = require("../../exception/library/InvalidLoginCredential");
const {OutOfStock} = require("../../exception/library/OutOfStock");

class Library{
    #listOfBooks = []
    #listOfUsers = []
    set addBook(book) {
        this.#listOfBooks.push(book);
        return `${book.title} by ${book.author} added successfully`;
    }
    get count() {
        return this.#listOfBooks.length;
    }
    removeBook(title) {
        this.#listOfBooks.
        splice(this.#searchTitle(title), 1);
        return `${title} successfully removed`
    }
    #searchTitle(title){
        return this.#listOfBooks
            .indexOf((this.#listOfBooks
                .find(titleIs => titleIs===title)));
    }
    searchByTitle(title) {
        return this.#searchTitle(title);
    }
    findAll() {
        return this.#listOfBooks;
    }
    get listOfBooks() {
        return this.#listOfBooks;
    }
    set listOfBooks(value) {
        this.#listOfBooks = value;
    }
    get listOfUsers() {
        return this.#listOfUsers;
    }
    createUser(newUser) {
        let user = Mapper.map(newUser);
        this.#listOfUsers.push(user);
        return user;
    }
    login(email, password) {
        for (let user of this.#listOfUsers){
            if (user.email===email && user.password===password){
                user.isLoggedIn=true;
                return user
            }
        }
        throw new InvalidLoginCredential("Invalid login details");
    }
    displayUserDashboard(user) {
        if (user.isLoggedIn === true) {
            let dashBoardResult = []
            for (let book of this.#listOfBooks) {
                if (book.category === user.interest) {
                    dashBoardResult.push(book)
                }
            }
            return dashBoardResult;
        }
    }
    borrowBook(user, title){
        if (user.isLoggedIn === true){
            let book = this.#listOfBooks
                .at(this.#searchTitle(title))
            if (book.noOfCopies === 0)
                throw new OutOfStock(`${book.title} all copies borrowed out...`);
            else {
                book.noOfCopies--;
                return user.borrowBook(book);
            }
        }
    }
}
module.exports = {Library}