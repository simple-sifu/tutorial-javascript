const parent = { firstName: "anna", lastName: "foo" };
const child = { firstName: "max" };

Object.setPrototypeOf(child, parent);

console.log(child["__proto__"]);
console.log(child.lastName.toUpperCase());
