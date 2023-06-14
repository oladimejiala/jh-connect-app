var menuButton = document.getElementById("menu-button");
var menuItems = document.getElementById("menu-items");

menuButton.addEventListener("click", function() {
  if (menuItems.style.display === "block") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "block";
  }
});
