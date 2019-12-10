const brackets = new Map([
  ['(', ')'],
  ['[', ']'],
  ['<', '>'],
  ['{', '}'],
]);
const isOpeningSymbol = (symbol) => brackets.has(symbol);
const getClosingSymbol = (symbol) => brackets.get(symbol);
const isEmptyStack = (stack) => stack.length === 0;

export default ({ str }) => {
  const stack = [];
  const regExp = /[^{}()<>\[\]]/g;
  const newStr = str.replace(regExp, '');
  for (const char of newStr) {
    if (isOpeningSymbol(char)) {
      const closingSymbol = getClosingSymbol(char);
      stack.push(closingSymbol);
    } else {
      if (isEmptyStack(stack)) {
        return 1;
      }
      const last = stack.pop();
      if (char !== last) {
        return 1;
      }
    }
  }
  return isEmptyStack(stack) ? 0 : 1;
};
