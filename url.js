(function(e){var a={},f=e.indexOf("#");e.substring(e.indexOf("?")).replace(/([^?=&]+)(=([^&]+))?/g,function(c,d,b,e){a[d]=e});a["boolean"]=function(c,d){return!a.hasOwnProperty(c)?d:"false"!==a[c]};a["float"]=function(c,d){var b=parseFloat(a[c]);return b!=b?d:b};a["int"]=function(c,d){var b=parseInt(a[c],10);return b!=b?d:b};a.hash=-1==f?void 0:e.substring(f+1);a.setUrl=arguments.callee;window.url=a})(location.href);