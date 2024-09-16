var header = document.getElementById("main-menu-container");
var sticky = header.offsetTop;

export function setupSticky() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}