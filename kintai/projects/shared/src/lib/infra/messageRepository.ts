import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { MessageRepository as IMessageRepository } from 'core/repository/messageRepository';
import { Message } from 'core/entity/message';

declare var require: any;
const getMessages = require('graphql-tag/loader!./queries/getMessages.graphql');
const getMessage = require('graphql-tag/loader!./queries/getMessage.graphql');
const createMessage = require('graphql-tag/loader!./mutations/createMessage.graphql');
const updateMessage = require('graphql-tag/loader!./mutations/updateMessage.graphql');

@Injectable({
  providedIn: 'root'
})
export class MessageRepository extends BaseRepository<Message> implements IMessageRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Message): Promise<boolean> {
    return this.mutate('createMessage', createMessage, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Message): Promise<boolean> {
    return this.mutate('updateMessage', updateMessage, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Message[]> {
    return this.query('messages', getMessages);
  }

  findOne(id: string): Promise<Message> {
    return this.query('message', getMessage, { id });
  }
}
