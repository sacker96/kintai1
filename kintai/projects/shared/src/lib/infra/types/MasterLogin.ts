/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MasterLogin
// ====================================================

export interface MasterLogin_masterlogin {
  token: string;
  systemId: string;
}

export interface MasterLogin {
  masterlogin: MasterLogin_masterlogin | null;
}

export interface MasterLoginVariables {
  email?: string | null;
  password?: string | null;
}
