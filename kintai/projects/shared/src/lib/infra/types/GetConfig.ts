/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetConfig
// ====================================================

export interface GetConfig_config {
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

export interface GetConfig {
  config: GetConfig_config;
}

export interface GetConfigVariables {
  name: string;
}
