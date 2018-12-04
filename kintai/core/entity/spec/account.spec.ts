require('jasmine-co').install();

import { Account } from '../account';

describe('exist', function() {
    it('success', function(){
        const a = new Account({});
        expect(a).toBeDefined();
    });
});

