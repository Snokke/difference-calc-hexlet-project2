#!/usr/bin/env node

/**
 * Module dependencies.
 */

import fs from 'fs';
import path from 'path';
import program from 'commander';
import version from '../../package.json';

const genDiff = (pathToFile1, pathToFile2) => {
  const file1 = fs.readFileSync(pathToFile1, 'utf-8');
  const file2 = fs.readFileSync(pathToFile2, 'utf-8');

  console.log(file1);
  console.log(file2);

  return 'hello';
};


program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => genDiff(firstConfig, secondConfig))
  .option('-f, --format [type]', 'Output format');

program.parse(process.argv);

export default genDiff;
