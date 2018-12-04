/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAccount
// ====================================================

export interface GetAccount_account {
  id: string | null;
  created: string | null;
  updated: string | null;
  systemId: string;
  company: string;
  name: string;
  busho: string | null;
  zip: string | null;
  address: string | null;
  address2: string | null;
  tel: string | null;
  email: string;
  num: number;
  staff: string | null;
  remarks: string | null;
  status: string;
}

export interface GetAccount {
  account: GetAccount_account;
}

export interface GetAccountVariables {
  systemId: string;
}
