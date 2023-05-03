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
