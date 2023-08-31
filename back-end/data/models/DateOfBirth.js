
class DateOfBirth{
    #day
    #month
    #year
    get day() {
        return this.#day;
    }
    set day(value) {
        this.#day = value;
    }
    get month() {
        return this.#month;
    }
    set month(value) {
        this.#month = value;
    }
    get year() {
        return this.#year;
    }
    set year(value) {
        this.#year = value;
    }
    get toString(){
        return this.day +" - "+ this.month + " - " + this.year;
    }
}
module .exports = {DateOfBirth}