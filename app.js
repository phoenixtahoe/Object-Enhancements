
const createInstructor = (firstName, lastName) => {return {firstName, lastName}}

let firstName = 'colt'
let favoriteNumber = 42
const instructor = {
    firstName, [favoriteNumber]: "That is my favorite!"
}

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hello!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

const createAnimal = (species, verb, noise) => {
    return {species, [verb](){ return noise }}
}
