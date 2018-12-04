import { Account } from '../entity/account';
import { Repository } from './repository';

export interface AccountRepository extends Repository<Account> {}
