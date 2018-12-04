import { AccountRepository } from '../../repository/accountRepository';
import { Account } from '../../entity/account';

export function getAccount(accountRepository: AccountRepository, systemId: string): Promise<Account> {
  return accountRepository.findOne(systemId);
}
