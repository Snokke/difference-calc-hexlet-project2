import fs from 'fs';
import path from 'path';
import genDiff from '..';

test('json diff', () => {
  const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff');
  const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
  expect(genDiff('before.json', 'after.json')).toBe(expected);
});
