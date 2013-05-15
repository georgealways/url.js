describe("Strings", function() {

  it("Basic", function() {
    url.setUrl('http://test.com/?foo=bar');
    expect(url.foo).toBe('bar');
  });

});