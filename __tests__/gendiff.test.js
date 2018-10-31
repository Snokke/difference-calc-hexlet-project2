import fs from 'fs';
import path from 'path';
import genDiff from '../src';

/*
describe('genDiffTree', () => {
  it('json tree ast', () => {
    const firstConfigPath = path.join(__dirname, '__fixtures__', 'before2.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__', 'after2.json');

    // state:
    //   new
    //   deleted
    //   changed

    const expected = [
      {
        state: '',
        key: 'common',
        value: '',
        children: [
          {
            state: '+', key: 'follow', value: 'false', children: [],
          },
          {
            state: '', key: 'setting1', value: 'Value 1', children: [],
          },
          {
            state: '-', key: 'setting2', value: '200', children: [],
          },
          {
            state: '-', key: 'setting3', value: 'true', children: [],
          },
          {
            state: '+',
            key: 'setting3',
            value: '',
            children: [
              {
                state: '', key: 'key', value: 'value', children: [],
              },
            ],
          },
          {
            state: '',
            key: 'setting6',
            value: '',
            children: [
              {
                state: '', key: 'key', value: 'value', children: [],
              },
              {
                state: '+', key: 'ops', value: 'vops', children: [],
              },
            ],
          },
          {
            state: '+', key: 'setting4', value: 'blah blah', children: [],
          },
          {
            state: '+',
            key: 'setting5',
            value: '',
            children: [
              {
                state: '', key: 'key5', value: 'value5', children: [],
              },
            ],
          },
        ],
      },
      {
        state: '',
        key: 'group1',
        value: '',
        children: [
          {
            state: '+', key: 'baz', value: 'bars', children: [],
          },
          {
            state: '-', key: 'baz', value: 'bas', children: [],
          },
          {
            state: '', key: 'foo', value: 'bar', children: [],
          },
          {
            state: '-',
            key: 'nest',
            value: '',
            children: [
              {
                state: '', key: 'key', value: 'value', children: [],
              },
            ],
          },
          {
            state: '+', key: 'nest', value: 'str', children: [],
          },
        ],
      },
      {
        state: '-',
        key: 'group2',
        value: '',
        children: [
          {
            state: '', key: 'abc', value: '12345', children: [],
          },
        ],
      },
      {
        state: '+',
        key: 'group3',
        value: '',
        children: [
          {
            state: '', key: 'fee', value: '100500', children: [],
          },
        ],
      },
    ];

    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });


  it('json tree diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff2');
    const firstConfigPath = path.join(__dirname, '__fixtures__', 'before2.json');
    const secondConfigPath = path.join(__dirname, '__fixtures__', 'after2.json');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });

});
*/


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

  it('ini diff', () => {
    const expectedFixturePath = path.join(__dirname, '__fixtures__', 'jsondiff');
    const firstConfigPath = path.join(__dirname, '__fixtures__', 'before.ini');
    const secondConfigPath = path.join(__dirname, '__fixtures__', 'after.ini');
    const expected = fs.readFileSync(expectedFixturePath, 'utf-8');
    expect(genDiff(firstConfigPath, secondConfigPath)).toBe(expected);
  });
});
