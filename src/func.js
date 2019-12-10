const findIndex = (str, arg1, arg2) => {
  const regex = /^$/;
  if (str.match(regex)) {
    return -1;
  }
  const newStr = str.toLowerCase();
  const newArg1 = arg1.toLowerCase();
  const newArg2 = arg2.toLowerCase();
  let indexOfArg1 = -1;
  let indexOfArg2 = -1;
  let length = str.length - 1;

  while ((indexOfArg1 === -1) && (indexOfArg2 === -1) && (length > 0)) {
    const substr = newStr.substring(length, length + 1);
    if (substr === newArg1) {
      indexOfArg1 = length;
      return indexOfArg1;
    }
    if (substr === newArg2) {
      indexOfArg2 = length;
      return indexOfArg2;
    }
    if (substr === arg1 && substr === arg2) {
      return Math.max(indexOfArg1, indexOfArg2);
    }
    length -= 1;
  }

  return -1;
};

export default findIndex;
