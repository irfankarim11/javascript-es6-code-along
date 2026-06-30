
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numbers();

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log("----------------");

// Infinite Generator

function* counter() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

const count = counter();

console.log(count.next().value);

console.log(count.next().value);

console.log(count.next().value);
