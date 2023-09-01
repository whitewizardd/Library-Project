

class CreateBook{
    #title;
    #author;
    #ISBN;
    #isAvailable;
    #noOfCopies;
    #category
    get title() {
        return this.#title;
    }
    set title(value) {
        this.#title = value;
    }
    get author() {
        return this.#author;
    }
    set author(value) {
        this.#author = value;
    }
    get ISBN() {
        return this.#ISBN;
    }
    set ISBN(value) {
        this.#ISBN = value;
    }
    get isAvailable() {
        return this.#isAvailable;
    }
    set isAvailable(value) {
        this.#isAvailable = value;
    }
    get noOfCopies() {
        return this.#noOfCopies;
    }
    set noOfCopies(value) {
        this.#noOfCopies = value;
    }
    get category() {
        return this.#category;
    }
    set category(value) {
        this.#category = value;
    }
}
module .exports = {CreateBook}