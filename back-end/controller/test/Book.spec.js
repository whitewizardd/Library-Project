const {Book} = require("../../data/models/Book");
const {test, expect} = require("@jest/globals");
test("test that book is responsive", ()=>{
    let book = new Book();
    book.status= true
    book.title = "java how to program";
    book.ISBN= "1212";
    book.author= "Paul Deitel";
    expect(book.author).toBe("Paul Deitel")
    expect(book).not.toBe(null)
})