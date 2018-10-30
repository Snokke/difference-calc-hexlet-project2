import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('genDiff', () => {
  it('json diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__', 'before.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__', 'after.json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

  it('yaml diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__', 'before.yaml');
    const secondConfigPath = path.join(__dirname, '__fixtures__', 'after.yaml');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });
});
