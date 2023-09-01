const {Admin} = require("../Admin")
const {test, expect} = require("@jest/globals");
const {Address} = require("../Address");
const {DateOfBirth} = require("../DateOfBirth");
const {Library} = require("../../data/models/Library");
const {Book} = require("../../data/models/Book");
// const {Admin} = require("mongodb");
test("Admin can be created", ()=>{
    let address = new Address();
    let dob = new DateOfBirth();
    let admin = new Admin();
    address.city="ikr"; address.state="lag"; address.country="NGA";
    address.streetName="Boladale";address.houseNumber="46"
    dob.year="1821";dob.day="11";dob.month="Aug"
    admin.address=address; admin.dateOfBirth=dob
    admin.firstName="Ola"
    // expect(admin).not.toBe(null)
})
test("Admin can add book(s) to the library", ()=>{
    let library = new Library();
    let book = new Book();
    book.author="Delex"
    book.title="Route and Path to software development"
    let admin = new Admin();
    let message = `Route and Path to software development by Delex added successfully`
    expect(admin.addBookToLibrary(library, book)).toBe(message);
    let book1 = new Book();
    book1.author= "Dleex"
    book1.title="JS in Action";
    admin.addBookToLibrary(library, book1)
    expect(admin.countNumberOFBooks()).toBe(2)
})
test("admin can remove book", ()=>{
    let library = new Library();
    let book  = new Book();
    book.title="jntp"
    let admin = new Admin();
    admin.addBookToLibrary(library,book)
    expect(admin.removeBook(library,"jhtp")).toBe("jhtp successfully removed");
})
test("admin can remove books", ()=>{
    let library = new Library();
    let book  = new Book();
    let admin = new Admin();
    let book1 = new Book();
    let book2 = new Book();
    book2.title="PL"
    book.title="jntp"
    book1.title="wotm"
    admin.addBookToLibrary(library,book)
    admin.addBookToLibrary(library,book2)
    admin.addBookToLibrary(library,book1)
    expect(admin.countNumberOFBooks()).toBe(3)
    expect(admin.removeBook(library,"PL")).toBe("PL successfully removed");
    admin.removeBook(library,"PL")
    expect(admin.countNumberOFBooks()).toBe(1)
})