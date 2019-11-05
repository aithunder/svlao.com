function mobileMenu() {
  var x = document.getElementById("top-navigation");
  if (x.className === "header-navigation") {
    x.className += " mobile";
  } else {
    x.className = "header-navigation";
  }
} 