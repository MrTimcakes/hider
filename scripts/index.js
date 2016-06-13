var hide = require('node-hide')
var openWindows;

hide.visableWindows(function(e){openWindows = e;})

function fillWindowList(){
  hide.visableWindows(function(data){
    var list = document.getElementById('windowList');
    while(list.hasChildNodes()) {
      list.removeChild(list.lastChild);
    }
    list
    for (var handle in data) {
      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = handle;

      var label = document.createElement('label')
      label.htmlFor = handle;
      label.appendChild(document.createTextNode(data[handle]));

      li.appendChild(checkbox);
      li.appendChild(label);
      list.appendChild(li);
    }
  })
}

fillWindowList();
