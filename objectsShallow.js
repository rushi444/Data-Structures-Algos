const person1 = {
  id: 1,
  name: 'Rushi',
  email: 'rushi@test.com',
};

const person2 = person1;

console.log('person 2', person2);

person2['name'] = "Not Rushi"

console.log('person 2', person2);

console.log('person 1', person1)
