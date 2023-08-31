const {User} = require("../data/models/User.js")
const {test, expect} = require("@jest/globals");
const {Book} = require("../data/models/Book");
const {Library} = require("../data/models/Library");
const {CreateUser} = require("../dto/createUser");

test("user can be created", ()=>{
    let user = new User();
    user.name="Oloba"
    user.email="@gmail";
    user.password="pass1212";
    expect(user).not.toBe(null)
    expect(user.name).toBe("Oloba")
})
test("test that we can number of books borrowed by user", ()=>{
    let user = new User();
    let book = new Book()
    user.borrowBook(book);
    expect(user.listOfBorrowedBook.length).toBe(1);
})
test("user can not borrow more than 5 books", ()=>{
    let user = new User();
    let book = new Book();
    let book1 = new Book();
    let book2 = new Book();
    let book3 = new Book();
    let book4 = new Book();
    user.borrowBook(book);
    user.borrowBook(book1);
    user.borrowBook(book2);
    user.borrowBook(book3);
    user.borrowBook(book4);
    expect(user.listOfBorrowedBook.length).toBe(5)
    let book5 = new User();
    expect(()=>{
        user.borrowBook(book5)
    }).toThrow("Maximum borrow limit reached");
})
test("user can return book", ()=>{
    let user = new User();
    let book = new Book();
    book.title= "java"
    user.borrowBook(book)
    expect(user.listOfBorrowedBook.length).toBe(1);
    expect(user.returnBook("java")).toBe(`${book.title} returned successfully`)
})
test("user can return book1", ()=>{
    let user = new User();
    let book1 = new Book();
    let book = new Book();
    book.title= "java"
    book1.title="python"
    user.borrowBook(book)
    user.borrowBook(book1)
    expect(user.listOfBorrowedBook.length).toBe(2);
    expect(user.returnBook("java")).toBe(`${book.title} returned successfully`)
    expect(user.listOfBorrowedBook.length).toBe(1)
})