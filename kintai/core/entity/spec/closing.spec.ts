require('jasmine-co').install();

import { Closing } from '../closing';

describe('exist', function () {
  it('success', function () {
    const a = new Closing({});
    expect(a).toBeDefined();
  });
});

