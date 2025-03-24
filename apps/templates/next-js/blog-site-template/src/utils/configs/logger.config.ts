import { LogInput, LogLevel, LogMeta } from "@/types/utils/logger";
import chalk from "chalk";
import path from "path";

const emojiMap: Record<LogLevel, string> = {
  log: "💫 ",
  info: "🦊 ",
  debug: "🐛 ",
  warn: "⚠️ ",
  error: "🔥 ",
  critical: "💀 ",
  success: "✅ ",
};

const colorMap: Record<LogLevel, (text: string) => string> = {
  log: chalk.bold.bgGreenBright.whiteBright,
  info: chalk.bold.cyanBright,
  debug: chalk.bold.blueBright,
  warn: chalk.bold.yellowBright,
  error: chalk.bold.redBright,
  critical: chalk.bold.bgRed.whiteBright,
  success: chalk.bold.greenBright,
};

const getTime = () =>
  chalk.dim(
    `[${new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })}]`
  );

const getCallerFile = (): string => {
  const stack = new Error().stack?.split("\n") || [];
  const callerLine = stack[3]; // 3rd line: the actual call
  const match = callerLine.match(/\((.*):(\d+):(\d+)\)/);
  if (!match) return "";

  const [, fullPath, line, column] = match;
  const fileName = path.basename(fullPath);
  return chalk.magenta(`${fileName}:${line}`);
};

const formatMessage = (msg: LogInput): string => {
  if (typeof msg === "string") return msg;
  return JSON.stringify(msg, null, 2);
};

const createLogger = () => {
  const logMethod =
    (level: LogLevel) => (message: LogInput, meta?: LogMeta) => {
      const emoji = emojiMap[level];
      const color = colorMap[level];
      const time = getTime();
      const label = color(`[${level.toUpperCase()}]`);
      const location = getCallerFile();

      const formattedMsg = formatMessage(message);
      const formattedMeta = meta
        ? chalk.gray(JSON.stringify(meta, null, 2))
        : "";

      console.log(
        `${emoji} ${time} ${label} ${formattedMsg} ${chalk.dim(location)}`
      );
      if (formattedMeta) {
        console.log(formattedMeta);
      }
    };

  return {
    log: logMethod("log"),
    info: logMethod("info"),
    debug: logMethod("debug"),
    warn: logMethod("warn"),
    error: logMethod("error"),
    critical: logMethod("critical"),
    success: logMethod("success"),
  };
};

export const log = createLogger();
