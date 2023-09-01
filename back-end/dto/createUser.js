
class CreateUser{
    #name
    #phoneNumber
    #password
    #email
    #interest
    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(value) {
        this.#phoneNumber = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get interest() {
        return this.#interest;
    }

    set interest(value) {
        this.#interest = value;
    }
}
module .exports = {CreateUser}