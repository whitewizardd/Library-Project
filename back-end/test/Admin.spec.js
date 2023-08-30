const {Admin} = require("../data/models/Admin")
const {test, expect} = require("@jest/globals");
const {Address} = require("../data/models/Address");
const {DateOfBirth} = require("../data/models/DateOfBirth");
// const {Admin} = require("mongodb");
test("Admin can be created", ()=>{
    let address = new Address();
    let dob = new DateOfBirth();
    let admin = new Admin();
    address.city="ikr"; address.state="lag"; address.country="NGA";
    address.streetName="Boladale";address.houseNumber="46"
    dob.year="1821";dob.day="11";dob.month="Aug"
    admin.address=address; admin.dateOfBirth=dob
    admin.firstName="Ola"
    // expect(admin).not.toBe(null)
})