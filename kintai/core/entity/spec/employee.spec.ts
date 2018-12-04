require('jasmine-co').install();

import { Employee } from '../employee';

describe('exist', function () {
  it('success', function () {
    const a = new Employee({});
    expect(a).toBeDefined();
  });
});

