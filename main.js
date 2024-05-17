/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function clickNavMobile() {
  var x = document.getElementById("nav-elements-mobile");
  var y = document.getElementsByClassName("mobile")[0];
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.height = "auto";
    document.getElementById("nav-svg").src = "./icons/hamburger-menu.svg"
  } else {
    x.style.display = "flex";
    y.style.height = "100vh";
    document.getElementById("nav-svg").src = "./icons/cross.svg"
  }
} 
