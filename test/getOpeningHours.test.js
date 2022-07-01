const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
test('Testa comportamento com parâmetro especificos e retorno', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});

test('Testa comportamento com parâmetros variados', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});

test('Testa comportamento com parâmetros variados 2', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});

test('Testa comportamento com parâmetros variados 3', () => {
  try {
    getOpeningHours('Thu', '09:00-AM');
  } catch (e) {
    expect(e.message).toBe('The day must be valid. Example: Monday');
  }
});

test('Testa comportamento com parâmetros variados 4', () => {
  try {
    getOpeningHours('Saturday', 'C9:00-AM');
  } catch (e) {
    expect(e.message).toBe('The hour should represent a number');
  }
});

test('Testa comportamento com parâmetros variados 2', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});

test('Testa comportamento com parâmetros variados 5', () => {
  try {
    getOpeningHours('Sunday', '09:c0-AM');
  } catch (e) {
    expect(e.message).toBe('The minutes should represent a number');
  }
});

test('Testa comportamento com parâmetros variados 6', () => {
  try {
    getOpeningHours('Friday', '09:00-ZM');
  } catch (e) {
    expect(e.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
  }
});
