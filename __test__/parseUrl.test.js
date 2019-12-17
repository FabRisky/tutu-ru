import parseUrl from '../src/parseUrl';

describe('parseUrl', () => {
  const href = 'http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo';
  const link = parseUrl(href);
  test('should be work', () => {
    expect(link.href).toEqual(href);
    expect(link.origin).toEqual('http://tutu.ru:8080');
    expect(link.host).toEqual('tutu.ru:8080');
    expect(link.protocol).toEqual('http:');
    expect(link.hostname).toEqual('tutu.ru');
    expect(link.pathname).toEqual('/do/any.php');
    expect(link.port).toEqual('8080');
    expect(link.hash).toEqual('#foo');
  });
});
