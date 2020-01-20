// // ////////////////////////// BASIC JS/react EXAMPLES

// // ////////////////////////////////rest parametr//////////////////////////////
// const rest = (a, b, ...num) => {
//   console.log(num, a, b);
// };
// rest(1, 2, 3, 4);

// // ////////////////////////////////array spread operator//////////////////////////////
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const copy = [...arr1, ...arr2, 7, 8];
// console.log(copy);

// // ////////////////////////////////array spread operator//////////////////////////////
// const def = {
//   host: 'localhost',
//   dbName: 'blog',
//   user: 'admin',
// };
// const opts = {
//   user: 'john',
//   password: 'utopia',
// };
// const port1 = 8080;
// const result = {
//   ...def, ...opts, port1,
// };
// console.log(result);

// // ////////////////////////////////object destructuring///////////////////////////
// const person = {
//   age: 21,
//   name: {
//     first: 'Peter',
//     last: 'Smith',
//   },
// };
// const { age, name: { first: firstName, last: lastName }, role = 'user' } = person;
// console.log(firstName, lastName, age, role);
// const { permissions: { role1 = 'user1' } = {} } = person;
// console.log(role1);

// const connect = ({
//   host = 'localhost',
//   port = 12345,
//   user = 'guest',
// } = {}) => {
//   console.log('user:', user, 'port:', port, 'host:', host);
// };
// connect({ port: 1111 });

// const dict = {
//   duck: 'quack',
//   dog: 'wuff',
//   mouse: 'squeak',
// };
// const { duck, ...otherAnimals } = dict;
// console.log(otherAnimals);

// // ////////////////////////////////array destructuring///////////////////////////
// const line = [[10, 17], [14, 7]];
// const [[p1x, p1y], [p2x, p2y]] = line;
// console.log(p1x, p1y, p2x, p2y);

// const people = ['chris', 'sandra', 'bob'];
// const [a, b, c = 'guest'] = people;
// console.log(a, b, c);
// console.log(people);

// const dict1 = {
//   duck: 'quack',
//   dog: 'wuff',
//   mouse: 'squeak',
//   hamster: 'squeak',
// };
// const res = Object.entries(dict1)
//   .filter(([, value]) => value === 'squeak')
//   .map(([key]) => key);
// console.log(res);

// const shape = {
//   type: 'seqment',
//   coordinates: {
//     start: [10, 15],
//     end: [17, 15],
//   },
// };
// const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
// console.log(startX, startY, endX, endY);
