#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { version } from '../../package.json';

const program = require('commander');

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
