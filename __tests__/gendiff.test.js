import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('genDiff tree', () => {
  it('json tree diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

  it('yaml tree diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.yaml');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

  it('ini tree diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/tree', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/tree', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/tree', 'after.ini');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });
});


describe('genDiff flat', () => {
  it('json diff flat', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/flat', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

  it('yaml diff flat', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/flat', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.yaml');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

  it('ini diff flat', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__/flat', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__/flat', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__/flat', 'after.ini');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });
});
