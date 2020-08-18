module.exports = jest.fn().mockImplementation((str) => {
  console.log('hola!!!');
  return str.toUpperCase();
});