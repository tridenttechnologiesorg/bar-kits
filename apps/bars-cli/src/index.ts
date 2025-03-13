#!/usr/bin/env node
import { Command } from "commander";
import { displayWelcome } from "./ui/welcome";
import { withSpinner } from "./ui/spinner";
import { styles } from "./ui/styles";

// Get package info
const packageJson = require("../package.json");

// Create CLI program
const program = new Command();

// Display welcome banner with Claude Code style
displayWelcome({
  name: "Bar Kits CLI",
  version: packageJson.version,
  description: "login successful 🎊, please enter to continue ...",
  preview: true,
});

// Configure CLI
program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version);

// Example command
program
  .command("example")
  .description("An example command")
  .action(async () => {
    // Show loading spinner
    await withSpinner({ text: "Processing your request" }, async () => {
      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return true;
    });

    console.log(styles.success("✓ Command completed successfully!"));
  });

// Parse CLI arguments
program.parse(process.argv);

// Display help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
