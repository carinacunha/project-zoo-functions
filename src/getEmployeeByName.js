const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  console.log(employeeName);
  const employeesInfos = data.employees;
  if (employeeName) {
    return employeesInfos.find((person) =>
      employeeName === person.firstName || employeeName === person.lastName);
  }
  return {};
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
