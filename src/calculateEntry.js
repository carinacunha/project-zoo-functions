const data = require('../data/zoo_data');

// const people = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const children = entrants.filter((element) => element.age < 18).length;
  const adults = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const seniors = entrants.filter((element) => element.age >= 50).length;

  const obj = {
    child: children,
    adult: adults,
    senior: seniors,
  };

  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const totalEtary = countEntrants(entrants);
  const { prices } = data;
  const { adult, child, senior } = prices;

  const sum = (
    adult * totalEtary.adult) + (child * totalEtary.child) + (senior * totalEtary.senior);

  console.log(sum);

  return sum;
  // const sum = entrants.
}

// console.log(countEntrants(people));
// console.log(calculateEntry(people));

module.exports = { calculateEntry, countEntrants };
