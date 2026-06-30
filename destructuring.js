
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
console.log(second);

// Object Destructuring

const student = {
    name: "Ali",
    age: 20,
    university: "SZABIST"
};

const { name, age, university } = student;

console.log(name);
console.log(age);
console.log(university);
