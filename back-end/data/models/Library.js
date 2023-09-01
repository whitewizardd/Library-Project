const {Book} = require("./Book.js");
const {User} = require("./User");
const {Mapper} = require("../mapper/Mapper");
const {InvalidLoginCredential} = require("../../exception/library/InvalidLoginCredential");
const {OutOfStock} = require("../../exception/library/OutOfStock");
const {BorrowBook} = require("./BorrowBook");
const {EmailExistException} = require("../../exception/userException/EmailExistException");

class Library{
    #listOfBooks = []
    #listOfUsers = []
    set addBook(book) {
        let a = new Book();
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
            .indexOf(this.#listOfBooks
                .find(x => x.title === title))
    }
    searchByTitle(title) {
        return this
            .#listOfBooks.
            at(this.#searchTitle(title))
    }
    get listOfBooks() {
        return this.#listOfBooks;
    }
    get listOfUsers() {
        return this
            .#listOfUsers;
    }
    createUser(newUser) {
        let user = Mapper.map(newUser);
        for (let us of this.#listOfUsers){
            if (us.email === user.email){
                throw new
                EmailExistException("Email already exist")
            }
        }
        this.#listOfUsers.push(user);
        return user;
    }
    login(email, password) {
        for (let person of this.#listOfUsers){
            if (person.email===email && person.password===password){
                person.isLoggedIn=true;
                return person
            }
        }
        throw new InvalidLoginCredential("Invalid login details");
    }
    displayUserDashboard(user) {
        let dashBoardResult = []
        if (user.isLoggedIn === true){
            for (let book of this.#listOfBooks) {
                if (book.category === user.interest){
                    dashBoardResult.push(book)
                }
            }
        }
        return dashBoardResult;
    }
    // borrowBook(user, title){
    //     // BorrowBook.borrowBook(user, title, this.#listOfBooks);
    //     if (user.isLoggedIn === true){
    //         for (let book of this.#listOfBooks){
    //             if (book.title === title){
    //                 if (book.noOfCopies === 0){
    //                     throw new OutOfStock("all copies borrowed out...");
    //                 }
    //                 else {
    //                     book.noOfCopies--;
    //                     return user.borrowBook(book);
    //                 }
    //             }
    //         }
    //     }
    // }
}
module.exports = {Library}