"use strict";

function bubbles() {
  var count = 250;
  var container = document.querySelector(".container");
  var i = 0;

  while (i < count) {
    var snow = document.createElement("i");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.random() * 8;
    snow.style.left = x + "px";
    snow.style.top = y + "px";
    snow.style.width = 1 + size + "px";
    snow.style.height = 1 + size + "px";
    snow.style.animationDuration = 6 + size + "s";
    snow.style.animationDelay = -size + "s";
    container.appendChild(snow);
    i++;
  }
}

bubbles();
//# sourceMappingURL=main.dev.js.map
