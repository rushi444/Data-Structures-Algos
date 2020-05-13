// Shallow Copy

const person1 = {
  id: 1,
  name: 'Rushi',
  email: 'rushi@test.com',
};

const person2 = person1;

console.log('person 2', person2);

person2['name'] = 'Not Rushi';

console.log('person 1', person1);
console.log('person 2', person2);

// Deep Copy

const person1 = {
  id: 1,
  name: 'Rushi',
  email: 'rushi@test.com',
};

const person2 = { ...person1 };

// OR(ex. you want add a condition or something)

// for (let key in person1) {
//   person2[key] = person1[key];
// }

console.log('person 2', person2);

person2['name'] = 'Not Rushi';

console.log('person 1', person1);
console.log('person 2', person2);


  // JS Primitive Data Types
  // - Number, String, Boolean, undefined, null