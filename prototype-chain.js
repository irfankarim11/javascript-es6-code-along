

const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "Ali";

console.log(student.name);

student.greet();

console.log(student.toString());


