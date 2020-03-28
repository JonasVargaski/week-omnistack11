const uniqueId = require('../../src/utils/uniqueId');

describe('Generate Unique ID', () => {
  it('Should generate an Unique ID', () => {
    const id = uniqueId();

    expect(id).toHaveLength(8);
  });
});
