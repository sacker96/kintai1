/* tslint:disable */
// This file was automatically generated and should not be edited.

import { MessageInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMessage
// ====================================================

export interface CreateMessage_createMessage {
  id: string | null;
}

export interface CreateMessage {
  createMessage: CreateMessage_createMessage;
}

export interface CreateMessageVariables {
  item?: MessageInput | null;
}
