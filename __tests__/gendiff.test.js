import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('genDiff json format, tree structure', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'jsonformatdiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.json');
    expect(genDiff(firstConfigPath, secondConfigPath, 'json')).toBe(expected);
  });

  it('yaml tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.yaml');
    expect(genDiff(firstConfigPath, secondConfigPath, 'json')).toBe(expected);
  });

  it('ini tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.ini');
    expect(genDiff(firstConfigPath, secondConfigPath, 'json')).toBe(expected);
  });
});

describe('genDiff plain format, tree structure', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'plainformatdiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.json');
    expect(genDiff(firstConfigPath, secondConfigPath, 'plain')).toBe(expected);
  });

  it('yaml tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.yaml');
    expect(genDiff(firstConfigPath, secondConfigPath, 'plain')).toBe(expected);
  });

  it('ini tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.ini');
    expect(genDiff(firstConfigPath, secondConfigPath, 'plain')).toBe(expected);
  });
});


describe('genDiff tree', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'nesteddiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.json');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });

  it('yaml tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.yaml');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });

  it('ini tree diff', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.ini');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });
});


describe('genDiff flat', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__/flat', 'nesteddiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');

  it('json diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.json');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });

  it('yaml diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.yaml');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });

  it('ini diff flat', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.ini');
    expect(genDiff(firstConfigPath, secondConfigPath, 'nested')).toBe(expected);
  });
});
