import fs from 'fs';
import path from 'path';
import genDiff from '..';

test('json diff', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff');
  const firstConfig = path.join(__dirname, '__fixtures__', 'before.json');
  const secondConfig = path.join(__dirname, '__fixtures__', 'after.json');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
  expect(genDiff(firstConfig, secondConfig)).toBe(expected);
});
