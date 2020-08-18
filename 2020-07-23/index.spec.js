const toUpperCase = require('./lib/toUpperCase');
const { toUpperCaseArray, getLaboratoriaApiVersion } = require('.');

jest.mock('node-fetch');
jest.mock('./lib/toUpperCase');

describe('toUpperCaseArray', () => {
  it('debería invocar a toUpperCase con el string que recibió', () => {
    expect(toUpperCaseArray('abc')).toEqual(['A', 'B', 'C']);
    expect(toUpperCase.mock.calls.length).toBe(1);
    expect(toUpperCase.mock.calls[0].length).toBe(1);
    expect(toUpperCase.mock.calls[0][0]).toBe('abc');
  });
});

describe('getLaboratoriaApiVersion', () => {
  it('should resolve to api version', () => {
    return getLaboratoriaApiVersion()
      .then(version => expect(typeof version).toBe('string'));
  });
});