url.js
======

url.js is a tiny library for getting variables out of your url. Nice for making dev flags and such.

http://host.com/?foo=bar&val=3
------------------------------

```
url.foo # returns "bar"
url.val # returns "3"
```


http://host.com/#about
------------------------------

```
url.hash # returns "about"
```


http://host.com/?debug
http://host.com/?debug=true
http://host.com/?debug=1
------------------------------

```
url.boolean('debug') # returns true
```
