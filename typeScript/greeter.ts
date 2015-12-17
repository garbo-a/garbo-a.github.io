class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    middleinitial: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.middleinitial + '.' + person.lastname;
}

var user = new Student('Alex', 'L', "User");

document.body.innerHTML = greeter(user);