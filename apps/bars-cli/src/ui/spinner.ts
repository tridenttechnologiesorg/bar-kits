import ora from "ora";
import { colors } from "./styles";
import chalk from "chalk";

export interface SpinnerOptions {
  text: string;
}

export function createLoadingSpinner(options: SpinnerOptions) {
  const { text } = options;

  // Create a simple spinner with the Claude Code style
  const spinner = ora({
    text: chalk.hex(colors.primary)(text),
    color: "blue",
    spinner: "bluePulse",
    indent:2
  });

  return spinner;
}

export async function withSpinner<T>(
  options: SpinnerOptions,
  action: () => Promise<T>
): Promise<T> {
  const spinner = createLoadingSpinner(options);
  spinner.start();

  try {
    const result = await action();
    spinner.succeed(chalk.hex(colors.primary)(`${options.text} - Done`));
    return result;
  } catch (error) {
    spinner.fail(chalk.hex(colors.primary)(`${options.text} - Failed`));
    throw error;
  }
}
