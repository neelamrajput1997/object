
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
let person = new Person("John", "Doe");

console.log(person.fullName());