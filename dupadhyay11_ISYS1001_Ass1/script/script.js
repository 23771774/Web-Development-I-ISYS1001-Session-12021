/* 
Scroll on Shrink navigation idea was taken from W3 School
The Official source can be found here:
https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
*/
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "5px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}
