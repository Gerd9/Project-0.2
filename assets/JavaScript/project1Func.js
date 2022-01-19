window.onscroll = function () {
  myFunction();
};
console.log("window");
//navbar top

var header = document.getElementById("navbar_header");
var navTop = header.offsetTop;

function myFunction() {
  if (window.scrollY >= 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
