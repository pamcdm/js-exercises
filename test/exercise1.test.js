const assert = require('assert');

describe('Exercise 1', () => {
  it('dummy test', async () => {
    assert.equal(1,1);
    const test = () => Promise.resolve(1);

    const result = await test();

    assert.equal(result,1);
  });
});
