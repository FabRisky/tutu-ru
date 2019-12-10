const dsCount = (str, val1, val2) => {
  const arrayOfValues = str.toLowerCase().split('');
  const lowerVal1 = val1.toLowerCase();
  const lowerVal2 = val2.toLowerCase();

  return arrayOfValues.reduce(
    (acc, value, index, array) => (array[index] === lowerVal1
    && array[index + 1] === lowerVal2 ? acc + 1 : acc), 0,
  );
};

export default dsCount;
