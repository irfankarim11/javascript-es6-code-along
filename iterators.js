

const array = [10, 20, 30];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log("----------------");

// Custom Iterator

const numbers = {

    start: 1,
    end: 5,

    [Symbol.iterator]() {

        let current = this.start;
        let end = this.end;

        return {

            next() {

                if (current <= end) {

                    return {
                        value: current++,
                        done: false
                    };

                }

                return {
                    done: true
                };

            }

        };

    }

};

for (const number of numbers) {

    console.log(number);

}
