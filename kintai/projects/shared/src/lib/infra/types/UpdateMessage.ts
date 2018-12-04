/* tslint:disable */
// This file was automatically generated and should not be edited.

import { MessageInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateMessage
// ====================================================

export interface UpdateMessage_updateMessage {
  id: string | null;
}

export interface UpdateMessage {
  updateMessage: UpdateMessage_updateMessage;
}

export interface UpdateMessageVariables {
  item?: MessageInput | null;
}
