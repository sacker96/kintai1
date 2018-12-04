require('jasmine-co').install();

import { HolidayWorkingAppried } from '../holidayWorkingAppried';

describe('exist', function () {
  it('success', function () {
    const a = new HolidayWorkingAppried({});
    expect(a).toBeDefined();
  });
});

