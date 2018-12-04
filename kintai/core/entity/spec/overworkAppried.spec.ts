require('jasmine-co').install();

import { OverworkAppried } from '../overworkAppried';

describe('exist', function () {
  it('success', function () {
    const a = new OverworkAppried({});
    expect(a).toBeDefined();
  });
});

