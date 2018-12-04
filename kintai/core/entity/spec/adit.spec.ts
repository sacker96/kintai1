require('jasmine-co').install();

import { Adit } from '../adit';

describe('exist', function () {
  it('success', function () {
    const a = new Adit({});
    expect(a).toBeDefined();
  });
});

