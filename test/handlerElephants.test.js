const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa comportamento com parâmetro indefinido', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Testa se o parametro é string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Testa o parametro count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  test('Testa o parametro names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  test('Testa o parametro averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
});
