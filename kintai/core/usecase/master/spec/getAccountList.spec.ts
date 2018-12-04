require("jasmine-co").install();

import { getAccountList } from "../getAccountList";
import { Account } from "../../../entity/account";
import { AccountRepository } from "../../../repository/accountRepository";

describe("getAccountList", function() {
  let mockRepository: AccountRepository;

  beforeAll(() => {
    mockRepository = {
      find: (searchParam: any): Promise<Account[]> => {
        let ret = [];
        ret.push(new Account({}));
        ret.push(new Account({}));
        return Promise.resolve(ret);
      },
      findOne: (id: string): Promise<Account> => {
        let a = new Account({});
        return Promise.resolve(a);
      },
      create: () => {
        return Promise.resolve(false);
      },
      update: () => {
        return Promise.resolve(false);
      },
      delete: () => {
        return Promise.resolve(false);
      }
    };
  });

  it("getAll", async function() {
    const result = await getAccountList(mockRepository);
    expect(result.length).toBe(2);
  });
});
