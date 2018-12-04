require('jasmine-co').install();

import { Holiday } from '../holiday';

describe('exist', function () {
  it('success', function () {
    const a = new Holiday({});
    expect(a).toBeDefined();
  });
});

