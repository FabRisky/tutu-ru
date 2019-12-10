import findIndex from '../src/func';

test('should be work', () => {
  const data = findIndex('mike', 'e', 'a');
  expect(data).toEqual(3);

  const data1 = findIndex('TOMATO', 'O', 'o');
  expect(data1).toEqual(5);

  const data2 = findIndex('RERoeat', 'r', 'a');
  expect(data2).toEqual(5);
});

test('should not be work', () => {
  const data = findIndex('rerer', 't', 'er');
  expect(data).toEqual(-1);

  const data1 = findIndex('car', 't', 't');
  expect(data1).toEqual(-1);

  const data2 = findIndex('tfgdTdfd', '.', ' ');
  expect(data2).toEqual(-1);
});
