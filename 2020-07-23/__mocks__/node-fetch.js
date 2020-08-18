module.exports = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve({
    version: '0.0.0',
  }),
}));