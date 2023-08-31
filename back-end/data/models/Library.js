const {Book} = require("./Book");

class Library{
    #listOfBooks = []
    #listOfUsers = []
    addBook(book) {
        this.#listOfBooks.push(book);
        return `${book.title} by ${book.author} added successfully`;
    }
    count() {
        return this.#listOfBooks.length;
    }
    removeBook(title) {
        // for (let book of this.#listOfBooks){
        //     if (book.title === title){
        //         let result = this.#listOfBooks.indexOf(book)
        //         this.#listOfBooks.splice(result, 1);
        //     }
        // }
        this.#listOfBooks.
        splice(this.#searchTitle(title), 1);
    }
    #searchTitle(title){
        for (let book of this.#listOfBooks){
            if (book.title === title) return book.toString
        }
        return null
    }
    searchByTitle(title) {
        return this.#searchTitle(title);
    }

    findAll() {
        return this.#listOfBooks;
    }
}
module.exports = {Library}