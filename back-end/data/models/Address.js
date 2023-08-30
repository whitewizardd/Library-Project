class Address{
    #houseNumber
    #streetName
    #city
    #state
    #country
    get houseNumber() {
        return this.#houseNumber;
    }
    set houseNumber(value) {
        this.#houseNumber = value;
    }
    get streetName() {
        return this.#streetName;
    }
    set streetName(value) {
        this.#streetName = value;
    }
    get city() {
        return this.#city;
    }
    set city(value) {
        this.#city = value;
    }
    get state() {
        return this.#state;
    }
    set state(value) {
        this.#state = value;
    }
    get country() {
        return this.#country;
    }
    set country(value) {
        this.#country = value;
    }
    get toString(){
        return this.houseNumber
            +", "+this.streetName
            +", "+this.city+
            ", "+this.state+
            ", "+this.country;
    }
}
module .exports = {Address}