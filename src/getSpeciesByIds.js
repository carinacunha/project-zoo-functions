// const data = require('../data/zoo_data');

// const speciesList = data.species;
// function getSpeciesByIds(...ids) {
//   const idEs = ids;
//   const result = [];

//   for (let i = 0; i < idEs.length; i += 1) {
//     for (let j = 0; j < speciesList.length; j += 1) {
//       if (speciesList[j].id === idEs[i]) {
//         result.push(speciesList[j]);
//       }
//     }
//   }
//   return result;
//   // return speciesList.filter((specie) => specie.id === idEs);
// }

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
