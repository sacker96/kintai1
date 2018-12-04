require('jasmine-co').install();

import { EmployeeHoliday } from '../employeeHoliday';

describe('exist', function () {
  it('success', function () {
    const a = new EmployeeHoliday({});
    expect(a).toBeDefined();
  });
});

