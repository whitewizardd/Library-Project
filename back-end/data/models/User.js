// const { Book } = require("../models/Book.js");
const {Person} = require("../../controller/Person");
const {BorrowLimitExceeded} = require("../../exception/userException/BorrowLimitExceeded");
const {Book} = require("./Book");
const {EmptyBorrowedBook} = require("../../exception/userException/EmptyBorrowedBookj");
class  User {
    #name
    #email
    #password
    #phoneNumber
    #isLoggedIn
    #interest
    #listOfBorrowedBook = []
    get password() {
        return this.#password;
    }
    set password(value) {
        this.#password = value;
    }
    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }
    get phoneNumber() {
        return this.#phoneNumber;
    }
    set phoneNumber(value) {
        this.#phoneNumber = value;
    }
    get listOfBorrowedBook() {
        return this.#listOfBorrowedBook;
    }

    set listOfBorrowedBook(value) {
        this.#listOfBorrowedBook = value;
    }
    get isLoggedIn() {
        return this.#isLoggedIn;
    }
    set isLoggedIn(value) {
        this.#isLoggedIn = value;
    }
    get toString(){
        return this.name +"\n"+
            this.email +"\n"+
            this.listOfBorrowedBook
    }
    borrowBook(book) {
        if (this.#listOfBorrowedBook.length >= 5){
            throw new BorrowLimitExceeded("Maximum borrow limit reached");
        }
        else {
            this.#listOfBorrowedBook.push(book)
            return "borrow approved..."
        }
    }
    get interest() {
        return this.#interest;
    }
    set interest(value) {
        this.#interest = value;
    }
    returnBook(title) {
        if (this.#searchTitle(title) === -1){
            throw new
            EmptyBorrowedBook
            ("No book was borrowed to return nothing");
        }
        this.#listOfBorrowedBook
            .splice(this.#searchTitle(title), 1)
        return "java returned successfully";
    }
    #searchTitle(title){
        return this.#listOfBorrowedBook.indexOf(this.#listOfBorrowedBook
            .find(titleIs => titleIs.title === title));
    }}
module .exports = {User}