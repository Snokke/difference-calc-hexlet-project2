import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const firstConfigPathJson = path.join(__dirname, '__fixtures__/tree', 'before.json');
const secondConfigPathJson = path.join(__dirname, '__fixtures__/tree', 'after.json');

const firstConfigPathYaml = path.join(__dirname, '__fixtures__/tree', 'before.yaml');
const secondConfigPathYaml = path.join(__dirname, '__fixtures__/tree', 'after.yaml');

const firstConfigPathIni = path.join(__dirname, '__fixtures__/tree', 'before.ini');
const secondConfigPathIni = path.join(__dirname, '__fixtures__/tree', 'after.ini');

describe('genDiff json format, tree structure', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'jsonformatdiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    expect(genDiff(firstConfigPathJson, secondConfigPathJson, 'json')).toBe(expected);
  });

  it('yaml tree diff', () => {
    expect(genDiff(firstConfigPathYaml, secondConfigPathYaml, 'json')).toBe(expected);
  });

  it('ini tree diff', () => {
    expect(genDiff(firstConfigPathIni, secondConfigPathIni, 'json')).toBe(expected);
  });
});

describe('genDiff plain format, tree structure', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'plainformatdiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    expect(genDiff(firstConfigPathJson, secondConfigPathJson, 'plain')).toBe(expected);
  });

  it('yaml tree diff', () => {
    expect(genDiff(firstConfigPathYaml, secondConfigPathYaml, 'plain')).toBe(expected);
  });

  it('ini tree diff', () => {
    expect(genDiff(firstConfigPathIni, secondConfigPathIni, 'plain')).toBe(expected);
  });
});


describe('genDiff tree, pretty format', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'prettydiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    expect(genDiff(firstConfigPathJson, secondConfigPathJson, 'pretty')).toBe(expected);
  });

  it('yaml tree diff', () => {
    expect(genDiff(firstConfigPathYaml, secondConfigPathYaml, 'pretty')).toBe(expected);
  });

  it('ini tree diff', () => {
    expect(genDiff(firstConfigPathIni, secondConfigPathIni, 'pretty')).toBe(expected);
  });
});


describe('genDiff flat, pretty format', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/flat', 'prettydiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.json');
    expect(genDiff(firstConfigPath, secondConfigPath, 'pretty')).toBe(expected);
  });

  it('yaml diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.yaml');
    expect(genDiff(firstConfigPath, secondConfigPath, 'pretty')).toBe(expected);
  });

  it('ini diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.ini');
    expect(genDiff(firstConfigPath, secondConfigPath, 'pretty')).toBe(expected);
  });
});
