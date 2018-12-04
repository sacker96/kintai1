import { Message } from '../entity/message';
import { Repository } from './repository';

export interface MessageRepository extends Repository<Message> {}
