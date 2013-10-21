'use strict';
function launchSticky(model){
  chrome.app.window.create('index.html', {
    id: model.id,
    width: 460,
    height: 400,
    minHeight: 12,
    minWidth: 216,
    frame: 'none'
  }, function(child){
    child.contentWindow.stickyModel = model;
  });
}

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.storage.sync.get(null, function(data){
    Object.keys(data).forEach(function(key){
      launchSticky(data[key]);
    });
  });
});
