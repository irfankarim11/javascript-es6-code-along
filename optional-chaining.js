

const user = {
    name: "Ali"
};

console.log(user.address?.city);

const employee = {
    company: {
        name: "OpenAI"
    }
};

console.log(employee.company?.name);

console.log(employee.location?.country);
