// Currying can look like this:

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} and ${ingredient2} and ${ingredient3} sandwich`;
        }
    }   
}

const mySandwich = buildSandwich('ham')('cheese')('mustard');
console.log(mySandwich);

// it works but thats getting ugly and nested the further we go
// let's refactor

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1} and ${ingred2} and ${ingred3} sandwich`;

const mySammy = buildSammy('ham')('cheese')('mustard');
console.log(mySammy);


// Another example of a curried function
const multiply = (x, y) => x * y;


const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));


