const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const elementResults = employees.map((employee) => employee.managers.includes(id));
  return elementResults.some((element) => element === true);
}

function getRelatedEmployees(managerId) {
  const isManagerResult = isManager(managerId);
  if (isManagerResult === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const elementResults = employees.filter((employee) => employee.managers.includes(managerId));
  return elementResults.map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
