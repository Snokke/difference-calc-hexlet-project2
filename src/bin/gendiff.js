#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');

program
  .version('0.1.3')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
