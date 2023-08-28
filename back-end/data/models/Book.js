

class Book{
    constructor(title, status, author, ISBN, available_status) {
        this._title = title;
        this._status = status;
        this._author = author;
        this._ISBN = ISBN;
        this._available_status = available_status;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get ISBN() {
        return this._ISBN;
    }
    set ISBN(value) {
        this._ISBN = value;
    }
    get available_status() {
        return this._available_status;
    }
    set available_status(value) {
        this._available_status = value;
    }
}