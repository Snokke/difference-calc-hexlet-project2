#!/usr/bin/env node

import program from 'commander';
import { version, description } from '../../package.json';
import genDiff from '..';

const rightType = (type) => {
  const types = ['pretty', 'plain', 'json'];
  if (types.includes(type)) {
    return type;
  }
  console.log('Wrong type. Supported formats: pretty, plain, json');
  return 'pretty';
};

program
  .version(version)
  .description(description)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format: pretty, plain, json', rightType, 'pretty')
  .action((firstConf, secondConf) => console.log(genDiff(firstConf, secondConf, program.format)))
  .parse(process.argv);
