(function () {
  "use strict";
  function Util () {} 

  Util.resolvePathForBuild = function (path) {
    if (path.indexOf("/docs/") !== -1) {
      var currentPath = path.slice(path.lastIndexOf("/"))
      currentPath = currentPath === "/index.html" ? "/" : currentPath

      return currentPath
    }
  }

  window.Util = Util
})();
