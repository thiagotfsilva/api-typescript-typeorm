#! /usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const yargs = require("yargs");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { execSync } = require("child_process");

// Parse the command-line arguments
const {
  _: [name],
  path,
} = yargs.argv;

// Construct the migration path

const migrationPath = `src/database/migrations/${name}`;

// Run the typeorm command

execSync(`typeorm migration:create ${migrationPath}`, { stdio: "inherit" });
