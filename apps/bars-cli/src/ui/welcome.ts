import figlet from "figlet";
import boxen from "boxen";
import { styles, colors } from "./styles";
import chalk from "chalk";

export interface WelcomeOptions {
  name: string;
  version: string;
  description?: string;
  preview?: boolean;
}

export function displayWelcome(options: WelcomeOptions): void {
  const { name, description, preview = false } = options;

  // Create block-style ASCII art using figlet with a suitable font
  const logo = figlet.textSync(name.toUpperCase(), {
    font: "ANSI Shadow", // This font gives a more block-style look
    horizontalLayout: "full",
  });

  const coloredLogo = chalk.hex(colors.primary)(logo);

  // Simple welcome message box (Claude Code style)
  const welcomeMessage = preview
    ? `+ Welcome to your template  provider!`
    : `+ Welcome to Bar kits`;

  const welcomeBox = boxen(chalk.hex(colors.primary)(welcomeMessage), {
    padding: 0,
    borderStyle: "classic",
    borderColor: colors.primary,
  });
  const titleBox = boxen(coloredLogo, {
    padding: 1,
    borderStyle: "classic",
    borderColor: colors.primary,
  });

  // Display welcome message and logo
  console.log(welcomeBox);
  console.log(titleBox);

  if (description) {
    const coloredDescription = chalk.hex(colors.dim)(description);
    console.log(styles.info(coloredDescription));
  }
}
