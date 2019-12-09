import dsCount from '../src/fizzBuzz';

test('dsCount is greater than 0', () => {
  const data1 = dsCount('ab___ab__', 'a', 'b');
  expect(data1).toEqual(2);

  const data2 = dsCount('___cd____', 'c', 'd');
  expect(data2).toEqual(1);

  const data3 = dsCount('de_______', 'd', 'e');
  expect(data3).toEqual(1);

  const data4 = dsCount('12_12__12', '1', '2');
  expect(data4).toEqual(3);

  const data5 = dsCount('-ab-аb-ab', 'a', 'b');
  expect(data5).toEqual(2);

  const data6 = dsCount('aAa', 'a', 'a');
  expect(data6).toEqual(2);
});

test('dsCont is zero', () => {
  const data1 = dsCount('_ba______', 'a', 'b');
  expect(data1).toEqual(0);

  const data2 = dsCount('_a__b____', 'a', 'b');
  expect(data2).toEqual(0);

  const data3 = dsCount('AVD__AVva', 'a', 'V');
  expect(data3).toEqual(2);
});
