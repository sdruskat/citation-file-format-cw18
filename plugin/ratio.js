(var resizeSlide = function() {
   Reveal.configure({
     width: window.innerWidth,
     height: window.innerHeight
   });
}

setInterval(resizeSlide, 1000);)