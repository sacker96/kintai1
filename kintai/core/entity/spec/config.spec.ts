require('jasmine-co').install();

import { Config } from '../config';

describe('exist', function () {
  it('success', function () {
    const a = new Config({});
    expect(a).toBeDefined();
  });
});

