const {OutOfStock} = require("../../exception/library/OutOfStock");

class BorrowBook{

    // static borrowBook(user, title, listOfBooks) {
    //     if (user.isLoggedIn === true){
    //         let book = listOfBooks
    //             .at(this.#searchTitle(title))
    //         if (book.noOfCopies === 0) {
    //             throw new OutOfStock("all copies borrowed out...");
    //         }
    //         else {
    //             book.noOfCopies--;
    //             return user.borrowBook(book);
    //         }
    //     }
    // }
}
module .exports = {BorrowBook}