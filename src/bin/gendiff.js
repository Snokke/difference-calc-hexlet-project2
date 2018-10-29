#!/usr/bin/env node

/**
 * Module dependencies.
 */

import program from 'commander';
import version from '../../package.json';
import genDiff from '..';

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)))
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
