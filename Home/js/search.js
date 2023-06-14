// menu icon showing its content
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navLinks.classList.toggle("show");
});

// Search Icon event listener
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", function() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    // Perform search or filter operation with searchTerm
    console.log(`Searching for "${searchTerm}"...`);
  }
});