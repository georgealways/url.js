describe("Strings", function() {

  it("", function() {

    url.setUrl('http://test.com/?foo=bar');
    expect(url.foo).toBe('bar');

    url.setUrl('http://test.com/?name=st%C3%A5le')
    expect(url.name).toBe('ståle');  

  });

});

describe("Booleans", function() {

  it("", function() {

    url.setUrl('http://test.com/?foo=true');
    expect(url.boolean('foo')).toBe(true);

    url.setUrl('http://test.com/');
    expect(url.boolean('foo', true)).toBe(true);

    url.setUrl('http://test.com/');
    expect(url.boolean('foo', false)).toBe(false);

    url.setUrl('http://test.com/?foo=false');
    expect(url.boolean('foo', true)).toBe(false);

    url.setUrl('http://test.com/?foo=true');
    expect(url.boolean('foo', false)).toBe(true);

    url.setUrl('http://test.com/?foo');
    expect(url.boolean('foo')).toBe(true);

    url.setUrl('http://test.com/?foo=blah');
    expect(url.boolean('foo')).toBe(true);

    url.setUrl('http://test.com/?foo&bar');
    expect(url.boolean('foo') && url.boolean('bar')).toBe(true);

    url.setUrl('http://test.com/?foo&bar=true');
    expect(url.boolean('foo') && url.boolean('bar')).toBe(true);

    url.setUrl('http://test.com/?foo');
    expect(url.boolean('foo', false)).toBe(true);

  });

});

describe("Numbers", function() {

  it("", function() {

    url.setUrl('http://test.com/?foo=7');
    expect(url.number('foo')).toBe(7);

    url.setUrl('http://test.com/');
    expect(url.number('foo')).toBe(undefined);

    url.setUrl('http://test.com/');
    expect(url.number('foo', 32)).toBe(32);

    url.setUrl('http://test.com/?foo=-7');
    expect(url.number('foo')).toBe(-7);

    url.setUrl('http://test.com/?foo=7');
    expect(url.number('foo')).toBe(7);

    url.setUrl('http://test.com/?foo=7.32');
    expect(url.number('foo')).toBe(7.32);

    url.setUrl('http://test.com/?foo=-7.32');
    expect(url.number('foo')).toBe(-7.32);

    url.setUrl('http://test.com/?foo=-7.32');
    expect(url.number('foo', 32)).toBe(-7.32);

    url.setUrl('http://test.com/');
    expect(url.number('foo', 32)).toBe(32);

  });

});

describe("Hashes", function() {

  it("", function() {

    url.setUrl('http://test.com/#foo');
    expect(url.hash).toBe('foo');

    url.setUrl('http://test.com/');
    expect(url.hash).toBe(undefined);

    url.setUrl('http://test.com/#');
    expect(url.hash).toBe('');

    url.setUrl('http://test.com/?foo=bar#test');
    expect(url.hash).toBe('test');
    expect(url.foo).toBe('bar');

    url.setUrl('http://test.com/?foo=bar&bar=2&awef#test');
    expect(url.hash).toBe('test');
    expect(url.foo).toBe('bar');
    expect(url.number('bar')).toBe(2);
    expect(url.boolean('awef')).toBe(true);

  });

})