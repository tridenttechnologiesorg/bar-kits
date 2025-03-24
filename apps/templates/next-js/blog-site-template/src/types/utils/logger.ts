export type LogLevel =
  | "log"
  | "info"
  | "debug"
  | "warn"
  | "error"
  | "critical"
  | "success";

export type LogInput = string | Record<string, any> | unknown;
export type LogMeta = Record<string, any>;