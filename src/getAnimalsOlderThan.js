const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filterName = species.find((specie) => specie.name === animal);
  return filterName.residents.every((element) => element.age > age);
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
