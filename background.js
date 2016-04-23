chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': Math.round(window.screen.width*0.9),
      'height': Math.round(window.screen.height*0.9)
    }
  });
});
