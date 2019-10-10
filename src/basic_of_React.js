
// ////////////////////////////////rest parametr//////////////////////////////
const rest = (a, b, ...num) => {
  console.log(num, a, b);
};
rest(1, 2, 3, 4);

// ////////////////////////////////spread operator//////////////////////////////
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const copy = [...arr1, ...arr2, 7, 8];
console.log(copy);

// ////////////////////////////////object destructuring///////////////////////////
const person = {
  age: 21,
  name: {
    first: 'Peter',
    last: 'Smith',
  },
};
const { age, name: { first: firstName, last: lastName }, role = 'user' } = person;
console.log(firstName, lastName, age, role);
const { permissions: { role1 = 'user1' } = {} } = person;
console.log(role1);

const connect = ({
  host = 'localhost',
  port = 12345,
  user = 'guest',
} = {}) => {
  console.log('user:', user, 'port:', port, 'host:', host);
};
connect({ port: 1111 });

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
};
const { duck, ...otherAnimals } = dict;
console.log(otherAnimals);
