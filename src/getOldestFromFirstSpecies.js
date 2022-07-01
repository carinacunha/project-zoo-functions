const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = employees.find((element) => element.id.includes(id));
  const idFirstAnimal = person.responsibleFor[0];
  const animals = species.find((element) => element.id.includes(idFirstAnimal)).residents;
  const ages = animals.map((element) => element.age).sort((a, b) => b - a)[0];
  const oldest = animals.find((element) => element.age === ages);
  return Object.values(oldest);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
