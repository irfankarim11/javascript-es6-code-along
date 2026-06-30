

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

// Objects

const person = {
    name: "Ali"
};

const student = {
    ...person,
    university: "SZABIST",
    semester: 3
};

console.log(student);

// Copy Array

const copy = [...numbers];

console.log(copy);
