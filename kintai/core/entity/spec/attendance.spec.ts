require('jasmine-co').install();

import { Attendance } from '../attendance';

describe('exist', function () {
  it('success', function () {
    const a = new Attendance({});
    expect(a).toBeDefined();
  });
});

