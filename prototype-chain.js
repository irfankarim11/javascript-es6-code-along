/*
===========================================
Prototype Chain
===========================================

Every JavaScript object has a prototype.

When JavaScript cannot find a property or method
inside an object, it looks inside its prototype.

This continues until Object.prototype,
then finally null.
*/

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

/*
Prototype Chain

student
   ↓
person
   ↓
Object.prototype
   ↓
null
*/
