import { AccountRepository } from '../../repository/accountRepository';
import { Account } from '../../entity/account';

export function getAccountList(
  accountRepository: AccountRepository
): Promise<Account[]> {
  return accountRepository.find({});
}
