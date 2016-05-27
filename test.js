var FFI = require('ffi');

var user32 = new FFI.Library('user32', {
    'FindWindowW': [
      'pointer', [ 'string', 'string']
    ]
    });

    var process = user32.FindWindowW("","Untitled - Notepad")
    console.log("Process ID", process)
