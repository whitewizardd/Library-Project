class Book{
    #title;
    #author;
    #ISBN;
    #isAvailable;
    #noOfCopies;
    get noOfCopies() {
        return this.#noOfCopies;
    }
    set noOfCopies(value) {
        this.#noOfCopies = value;
    }
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
    get toString(){
        return this.title +"\n"+
            this.author +"\n"+
            this.isAvailable +"\n"+
            this.ISBN+"\n"+
            this.noOfCopies
    }
}
// const b = new Book();
module.exports = { Book }