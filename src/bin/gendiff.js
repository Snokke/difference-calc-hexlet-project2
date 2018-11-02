#!/usr/bin/env node

/**
 * Module dependencies.
 */

import program from 'commander';
import { version } from '../../package.json';
import genDiff from '..';

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('[type] <firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((firstConf, secondConf, type) => console.log(genDiff(firstConf, secondConf, type)))
  .parse(process.argv);
