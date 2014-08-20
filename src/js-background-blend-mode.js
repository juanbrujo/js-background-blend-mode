;(function(window) {

  var __f = function(obj) {
    if (typeof window[obj] === "undefined") {
      if (typeof console !== "undefined") {
        console.log("Warning: canvas context not supported (" + obj + " needed)");
      }
      return false;
    }
    return true;
  };

  if (!__f("HTMLCanvasElement")) { return; }

  document.addEventListener("DOMContentLoaded", function() {
    var supportsBackgroundBlendMode = window.getComputedStyle(document.body).backgroundBlendMode;
    if(typeof supportsBackgroundBlendMode === "undefined") {  

      // TODO: check for Canvas composite support

      createBlendedBackgrounds();
    }
  }, false);

  var createBlendedBackgrounds = function() {
    var els = document.querySelectorAll("[data-blend]");
    for(var i = 0; i < els.length; i++) {
      var el = els[i],
          type = el.getAttribute("data-blend"),
          image = el.getAttribute("data-blend-image"),
          color = el.getAttribute("data-blend-color");
      processElement(el,type,image,color);
    }
  };

  var processElement = function(el,type,image,color) {
    var backgroundImageURL = image,
        backgroundColor = color;

    createBlendedBackgroundImageFromURLAndColor(backgroundImageURL, backgroundColor, type, function(imgData) {
      el.style.backgroundImage = "url(" + imgData + ")";
    });
  };

  var createBlendedBackgroundImageFromURLAndColor = function(url, color, type, callback) {

    // TODO: add alpha channel

    var img = document.createElement("img");
    img.src = url;
    img.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      var context = canvas.getContext("2d");
      context.globalCompositeOperation = type;
      context.drawImage(this, 0, 0);
      context.fillStyle = color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      var data = canvas.toDataURL("image/jpeg");
      callback(data);
    };
  };

})(window);