const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(inputObj) {
  if (!inputObj) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  } if (!inputObj.sex) {
    const { specie: inputValue } = inputObj;
    const targetSpecies = species.find((element) => element.name === inputValue);
    return targetSpecies.residents.length;
  }
  const { specie: inputValue, sex: sexValue } = inputObj;
  const targetResidents = species.find((element) => element.name === inputValue).residents;
  return targetResidents.filter((element) => element.sex === sexValue).length;
}

console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'penguins', sex: 'female' }));
module.exports = countAnimals;
