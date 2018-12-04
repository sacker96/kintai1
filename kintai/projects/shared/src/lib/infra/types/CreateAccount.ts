/* tslint:disable */
// This file was automatically generated and should not be edited.

import { AccountInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAccount
// ====================================================

export interface CreateAccount_createAccount {
  id: string | null;
}

export interface CreateAccount {
  createAccount: CreateAccount_createAccount;
}

export interface CreateAccountVariables {
  item?: AccountInput | null;
}
