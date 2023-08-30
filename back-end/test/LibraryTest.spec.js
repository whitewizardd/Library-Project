const {Library} = require("../data/models/Library")
const {Book} = require("../data/models/Book");
const {expect, test} = require("@jest/globals");
// const {expect} = require("@jest/globals");
// const {test} = require("@jest/globals");
test("test that book can be added to the library", ()=>{
    let library = new Library;
    let book = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.noOfCopies=2
    book.isAvailable=true
    let message = "java how to program by Paul Deitel added successfully"
    expect(library.addBook(book)).toBe(message);
    expect(library.count()).toBe(1)
    let book2 = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.isAvailable=true
    library.addBook(book2)
    expect(library.count()).toBe(2)
})
test("test that book can be removed with the title", ()=>{
    let library = new Library;
    let book = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.noOfCopies=2
    book.isAvailable=true
    expect(library.addBook(book)).not.toBe(null);
    (library.removeBook("java how to program"))
    expect(library.count()).toBe(0)
    expect(library.searchByTitle("java how tp program")).toBe(null)
})
test("search for book", ()=>{
    let library = new Library;
    let book = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.noOfCopies=2
    book.isAvailable=true
    book.noOfCopies="2"
    library.addBook(book)
    let message = "java how to program"+"\n"+
        "Paul Deitel"+"\n"+
        true+"\n"+
        "1212"+"\n"+
        "2";
    expect(library.searchByTitle("java how to program")).toBe(message)
})
test("search for book1", ()=>{
    let library = new Library;
    let book = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.noOfCopies=2
    book.isAvailable=true
    library.addBook(book)
    let book2 = new Book();
    book.ISBN="1222";
    book.author="Paul Deitel"
    book.title="java how"
    book.isAvailable=false
    book.noOfCopies="1"
    library.addBook(book2)
    let message = "java how"+"\n"+
        "Paul Deitel"+"\n"+
        false+"\n"+
        "1222"+"\n"+
        "1";
    expect(library.searchByTitle("java how")).toBe(message)
    library.removeBook("java how")
    expect(library.searchByTitle("java how")).toBe(null)
})
test("search for all books", ()=>{
    let library = new Library;
    let book = new Book();
    book.ISBN="1212";
    book.author="Paul Deitel"
    book.title="java how to program"
    book.noOfCopies=2
    book.isAvailable=true
    library.addBook(book)
    let book2 = new Book();
    book.ISBN="1222";
    book.author="Paul Deitel"
    book.title="java how"
    book.isAvailable=false
    book.noOfCopies="1"
    library.addBook(book2)
    let arr = [book, book2]
    // expect(library.findAll()).toBe(arr)
})