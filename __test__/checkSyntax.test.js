import checkSyntax from '../src/checkSyntax';test('should be balanced', () => {  const str1 = '---(++++)----';  expect(checkSyntax(str1)).toEqual(0);  const str2 = '';  expect(checkSyntax(str2)).toEqual(0);  const str3 = 'before ( middle []) after';  expect(checkSyntax(str3)).toEqual(0);  const str4 = '(  [  <>  ()  ]  <>  )';  expect(checkSyntax(str4)).toEqual(0);});test('should not be balanced', () => {  const str1 = ') (';  expect(checkSyntax(str1)).toEqual(1);  const str2 = '} {';  expect(checkSyntax(str2)).toEqual(1);  const str3 = '<(   >)';  expect(checkSyntax(str3 )).toEqual(1);  const str4 = '   (      [)';  expect(checkSyntax(str4)).toEqual(1);});