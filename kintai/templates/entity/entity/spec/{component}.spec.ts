require('jasmine-co').install();

import { {Name} } from '../{name}';

describe('exist', function () {
  it('success', function () {
    const a = new {Name}({});
    expect(a).toBeDefined();
  });
});

