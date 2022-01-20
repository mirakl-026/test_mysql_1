module.exports = class Person {
    id;
    firstName;
    lastName;

    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello, i'm ${this.firstName} ${this.lastName}`);
    }
}