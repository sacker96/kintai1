/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMessages
// ====================================================

export interface GetMessages_messages {
  id: string | null;
  created: string;
  updated: string;
}

export interface GetMessages {
  messages: (GetMessages_messages | null)[] | null;
}
