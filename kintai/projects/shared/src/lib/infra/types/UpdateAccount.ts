/* tslint:disable */
// This file was automatically generated and should not be edited.

import { AccountInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAccount
// ====================================================

export interface UpdateAccount_updateAccount {
  id: string | null;
}

export interface UpdateAccount {
  updateAccount: UpdateAccount_updateAccount;
}

export interface UpdateAccountVariables {
  item?: AccountInput | null;
}
