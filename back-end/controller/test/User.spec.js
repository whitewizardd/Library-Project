const {User} = require("../../data/models/User")
const {Person} = require("../Person")
const {Address} = require("../Address")
const {DateOfBirth} = require("../DateOfBirth")
const {expect, test} = require("@jest/globals");
const {Library} = require("../../data/models/Library");
test("test that user can be created", ()=>{
    let user = new User();
    let address = new Address();
    let dob = new DateOfBirth();
    dob.month="Aug"; dob.day="11"; dob.year="1888";
    address.houseNumber="46"; address.streetName="Boladale";
    address.city="Isolo"; address.state="Lagos"; address.country="NGA"
    user.sex="male"; user.username="wizard"; user.address=address
    user.dateOfBirth=dob;user.firstName="Oladele";
    user.lastName="Sam"; user.phoneNumber="090"; user.password="1212";
    expect(user.phoneNumber).toBe("090")
})
test("user is a member ", ()=>{
    let library = new Library()

})

