import drawRating from '../src/drawRating';

test('should be work', () => {
  const data = drawRating(0);
  expect(data).toEqual('★☆☆☆☆');

  const data1 = drawRating(21);
  expect(data1).toEqual('★★☆☆☆');

  const data2 = drawRating(99);
  expect(data2).toEqual('★★★★★');
});

test('should not be work', () => {
  const data = drawRating(-1);
  expect(data).toEqual('Incorrect vote');

  const data1 = drawRating(101);
  expect(data1).toEqual('Incorrect vote');
});
