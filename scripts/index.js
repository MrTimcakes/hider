var FFI = require('ffi');

function TEXT(text){
  return new Buffer(text, 'ucs2').toString('binary');
}

var user32 = new FFI.Library('user32', {
  'FindWindowW': ['int', ['string', 'string']],
  'ShowWindow': ['int', ['int', 'int']]
});

var handle = user32.FindWindowW(null, TEXT('Untitled - Notepad'));
console.log(handle);
user32.ShowWindow(handle, 0);
setTimeout(function(){
  user32.ShowWindow(handle, 1);
}, 5000);
