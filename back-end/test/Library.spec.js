const {Library} = require("../data/models/Library")
const {CreateUser} = require("../dto/createUser")
const {test, expect} = require("@jest/globals");
const {User} = require("../data/models/User");
const {Book} = require("../data/models/Book");

test("create user", ()=>{
    let library = new Library();
    let newUser = new CreateUser();
    newUser.name="Oladele"
    let user = library.createUser(newUser);
    expect(user.name).toBe("Oladele")
    expect(library.listOfUsers.length).toBe(1)
})
test("user can login after creation", ()=>{
    let library = new Library();
    let newUser = new CreateUser();
    newUser.name="Oladele"
    newUser.password="password1212";
    newUser.email="g@mail.com"
    library.createUser(newUser);

    let user = library.login("g@mail.com", "password1212");
    expect(user.name).toBe("Oladele")
    expect(user.isLoggedIn).toBe(true)
})
test("wrong login credentials throws error", ()=>{
    let library = new Library();
    let newUser = new CreateUser();
    newUser.name="Oladele"
    newUser.password="password1212";
    newUser.email="g@mail.com"
    library.createUser(newUser);

    expect(()=>{
        library.login("gg@mail.com", "password1212")
    }).toThrow("Invalid login details")
})
test("test multiple user", ()=>{
    let library = new Library();
    let newUser = new CreateUser();
    let secondUser = new CreateUser();
    newUser.name="Oladele"
    newUser.password="password1212";
    newUser.email="g@mail.com"
    secondUser.email="OO@email.com"
    secondUser.password="1212password"
    let user = library.createUser(newUser);
    let user1 = library.createUser(secondUser)
    expect(library.listOfUsers.length).toBe(2)
    expect(user.isLoggedIn).toBe(false)
    library.login("OO@email.com", "1212password");
    expect(user1.isLoggedIn).toBe(true)
})
test("user cannot return book that was not borrowed", ()=>{
    let user = new User();
    expect(()=>{
        user.returnBook("java");
    }).toThrow("No book was borrowed to return nothing")
    let book = new Book();
    book.title= "python";
    user.borrowBook(book);
    expect(()=>{
        user.returnBook("mySql")
    }).toThrow("No book was borrowed to return nothing")
})
test("test that user can get dashboard history based on category", ()=>{
    let library = new Library();
    let firstUser = new CreateUser();
    let secondUser = new CreateUser();
    firstUser.interest="programming";firstUser.email="ff@.com";firstUser.password="password1212";
    secondUser.interest="science";secondUser.email="ss@.com";secondUser.password="password1111"
    let user1 = library.createUser(firstUser)
    let user2 = library.createUser(secondUser);
    let book = new Book();let book1 = new Book();
    let book2 = new Book();let book3 = new Book();
    book.noOfCopies=1;book1.noOfCopies=1
    book2.noOfCopies=1;book3.noOfCopies=1
    book.category="programming";book1.category="science"
    book2.category="science";book3.category="science"
    library.addBook=book;library.addBook=book1
    library.addBook=book2;library.addBook=book3
    let userr = library.login("ff@.com", "password1212");
    let userr1 = library.login("ss@.com", "password1111")
    expect(library.count).toBe(4);
    expect(library.displayUserDashboard(userr).length).toBe(1);
    expect(library.displayUserDashboard(userr1).length).toBe(3);
})
test("number of available copies of a book should reduce after a user must have borrowed a copy", ()=>{
    let library = new Library();
    let book = new Book();
    book.title="title"
    book.noOfCopies=4
    library.addBook=book;
    let user = new User();
    user.email="rr@mail.com";
    user.password="password1212"
    let savedUser =library.createUser(user)
    library.login("rr@mail.com", "password1212")
    expect(library.listOfBooks.length).toBe(1)
    expect(library.borrowBook(savedUser, "title"))
        .toBe("borrow approved...");
    expect(book.noOfCopies).toBe(3);
    expect(savedUser.listOfBorrowedBook.length).toBe(1)
})
test("no duplicate email allowed", ()=>{
    let library = new Library();
    let user = new CreateUser();
    user.email="@ff.com"
    user.password="pass1212"
    library.createUser(user);
    let secondUser = new User();
    secondUser.email="@ff.com";
    secondUser.password="pass121222"
    expect(()=>{
        library.createUser(secondUser)
    }).toThrow("Email already exist")
})
// test("book that is out of stock can not be borrowed", ()=>{
//     let library = new Library()
//     let book = new Book();
//     book.title="title1"
//     // book.noOfCopies=0
//     library.addBook=book;
//     let user = new CreateUser();
//     user.email="rr@mail.com";
//     user.password="password1212"
//     user.interest="science";
//     user.phoneNumber="090"
//     user.name="Ola"
//     let savedUser = library.createUser(user)
//     let newUser = library.login("rr@mail.com", "password1212")
//     expect(library.listOfBooks.length).toBe(1)
//     expect(newUser.name).toBe("Ola")
//     expect(library.borrowBook(newUser, "title1"))
//         .toThrow("title1 all copies borrowed out...");
//     expect(book.noOfCopies).toBe(0);
//     expect(savedUser.listOfBorrowedBook.length).toBe(0)
// })