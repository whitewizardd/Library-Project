

class EmailExistException extends Error{
    constructor(message) {
        super(message);
    }
}
module .exports = { EmailExistException }