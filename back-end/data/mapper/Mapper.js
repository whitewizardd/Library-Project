const {User} = require("../models/User");
const {Book} = require("../models/Book");

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
    // static mapBook(newBook){
    //     let book = new Book();
    //     book.title=newBook.title
    //     book.noOfCopies=newBook.noOfCopies
    //     book.ISBN=newBook.ISBN
    //     book.category=newBook.category
    //     book.author=newBook.author
    //     book.isAvailable=newBook.isAvailable
    //     return book;
    // }
}
module .exports = {Mapper}