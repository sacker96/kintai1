/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMessage
// ====================================================

export interface GetMessage_message {
  id: string | null;
  created: string;
  updated: string;
}

export interface GetMessage {
  message: GetMessage_message;
}

export interface GetMessageVariables {
  id: string;
}
