/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetConfigs
// ====================================================

export interface GetConfigs_configs {
  readType: string | null;
  name: string | null;
  val1: string | null;
  val2: string | null;
  val3: string | null;
  num1: number | null;
  num2: number | null;
  num3: number | null;
  extra: string | null;
  updated: string;
}

export interface GetConfigs {
  configs: (GetConfigs_configs | null)[] | null;
}
