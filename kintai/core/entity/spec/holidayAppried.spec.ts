require('jasmine-co').install();

import { HolidayAppried } from '../holidayAppried';

describe('exist', function () {
  it('success', function () {
    const a = new HolidayAppried({});
    expect(a).toBeDefined();
  });
});

