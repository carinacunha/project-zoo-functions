const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const obj = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const objList = [
  {
    Tuesday: {
      officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'] },
  },
  {
    Wednesday: {
      officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
    },
  },
  {
    Thursday: {
      officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
    },
  },
  {
    Friday: {
      officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
    },
  },
  {
    Saturday: {
      officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: [
        'lions', 'tigers',
        'bears', 'penguins',
        'otters', 'frogs',
        'snakes', 'elephants',
      ],
    },
  },
  {
    Sunday: {
      officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
    },
  },
  {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  },
];

function returnDays(scheduleTarget) {
  return species.find((animal) => animal.name === scheduleTarget).availability;
}

function returnDayInfo(scheduleTarget) {
  return objList.find((element) => element[scheduleTarget]);
}

function returnAllInfos() {
  return obj;
}

const animals = species.map((specie) => specie.name);
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return returnAllInfos();
  }
  if (animals.includes(scheduleTarget)) {
    return returnDays(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return returnDayInfo(scheduleTarget);
  }
  return returnAllInfos();
}
module.exports = getSchedule;
