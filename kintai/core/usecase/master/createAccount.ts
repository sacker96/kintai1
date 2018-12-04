import { AccountRepository } from '../../repository/accountRepository';
import { Account } from '../../entity/account';

export function createAccount(accountRepository: AccountRepository, item: Account): Promise<boolean> {
  return accountRepository.create(item);
}
