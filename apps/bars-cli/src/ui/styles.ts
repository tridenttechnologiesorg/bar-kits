import chalk from "chalk";
import gradient from "gradient-string";

export const colors = {
  primary: "#0891B2",
  secondary: "#f5a97f",
  highlight: "#f5a97f",
  text: "#f0f0f0",
  dim: "#116377",
};

export const gradients = {
  primary: gradient(["#f5a97f", "#f5a97f"]),
};

export const styles = {
  heading: (text: string): string => chalk.hex(colors.primary)(text),
  subheading: (text: string): string => chalk.hex(colors.secondary)(text),
  success: (text: string): string => chalk.hex(colors.primary)(text),
  info: (text: string): string => chalk.hex(colors.text)(text),
  dim: (text: string): string => chalk.hex(colors.dim)(text),
  command: (text: string): string => chalk.bold.hex(colors.primary)(text),
  highlight: (text: string): string => chalk.hex(colors.highlight)(text),
  bold: (text: string): string => chalk.bold(text),
};
