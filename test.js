(function () {
  window._frames = window.frames;

  window.frames = function frames(frameName) {
    var fs = document.getElementsByTagName('frame');
    var i;
    for (i = 0; i < fs.length; ++i) {
      if (fs[i].name === frameName) {
        return window._frames[i] || null;
      }
    }
    return null;
  };
})();