require('jasmine-co').install();

import { Message } from '../message';

describe('exist', function () {
  it('success', function () {
    const a = new Message({});
    expect(a).toBeDefined();
  });
});

