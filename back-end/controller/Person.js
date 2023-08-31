class Person{
    #firstName;
    #lastName;
    #phoneNumber;
    #address;
    #dateOfBirth
    #sex
    constructor() {
    }
    get firstName() {
        return this.#firstName;
    }
    set firstName(value) {
        this.#firstName = value;
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(value) {
        this.#lastName = value;
    }
    get phoneNumber() {
        return this.#phoneNumber;
    }
    set phoneNumber(value) {
        this.#phoneNumber = value;
    }
    get address() {
        return this.#address;
    }
    set address(value) {
        this.#address = value;
    }
    get dateOfBirth() {
        return this.#dateOfBirth;
    }
    set dateOfBirth(value) {
        this.#dateOfBirth = value;
    }
    get sex() {
        return this.#sex;
    }
    set sex(value) {
        this.#sex = value;
    }
}
module .exports = {Person}