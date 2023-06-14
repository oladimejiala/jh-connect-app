// const likeIcons = document.querySelectorAll('.like-icon i');
// const replyBtn = document.querySelector('.reply-btn');
// const quoteTweetBtn = document.querySelector('.quote-tweet-btn');
// const composeBtn = document.querySelector('.compose-btn');

// likeIcons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     // remove active class from all icons
//     likeIcons.forEach(icon => icon.classList.remove('active'));
//     // add active class to clicked icon
//     icon.classList.add('active');
//   });
// });



// get interactive icons
const imageIcon = document.querySelector('.image-icon');
const retweetIcon = document.querySelector('.retweet-icon');
const likeIcons = document.querySelectorAll('.like-icon');
const composeIcon = document.querySelector('.compose-icon');

// add click event to image icon
imageIcon.addEventListener('click', () => {
  // do something when image icon is clicked
});

// add click event to retweet icon
retweetIcon.addEventListener('click', () => {
  // do something when retweet icon is clicked
});

// // add click event to like icons
likeIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // remove active class from all icons
    likeIcons.forEach(icon => icon.classList.remove('active'));
    // add active class to clicked icon
    icon.classList.add('active');
    // do something when like icon is clicked
  });
});

// // add click event to compose icon
composeIcon.addEventListener('click', () => {
  // do something when compose icon is clicked
});

// const menuIcon = document.querySelector(".menu-icon");
// const navLinks = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navLinks.classList.toggle("show");
});

// const searchIcon = document.getElementById("search-icon");
// const searchInput = document.getElementById("search-input");

// searchIcon.addEventListener("click", function() {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm !== "") {
//     console.log(`Searching for "${searchTerm}"...`);
//   }
// });

// Get the elements
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

// Add click event listener to menu icon
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add keyup event listener to search input
searchInput.addEventListener('keyup', () => {
  // Get the search term
  const searchTerm = searchInput.value.toLowerCase();

  // Get all tweet containers
  const tweetContainers = document.querySelectorAll('.tweet-container');

  // Loop through all tweet containers
  tweetContainers.forEach(container => {
    // Get the user name and handle elements
    const userNameEl = container.querySelector('.user-name');
    const userHandleEl = container.querySelector('.user-handle');

    // Get the user name and handle text
    const userName = userNameEl.textContent.toLowerCase();
    const userHandle = userHandleEl.textContent.toLowerCase();

    // Check if the search term matches with the user name or handle
    if (userName.includes(searchTerm) || userHandle.includes(searchTerm)) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
});

// Add click event listener to search icon
searchIcon.addEventListener('click', () => {
  searchInput.focus();
});


//Get the like icon element
const likeIcon = document.querySelector(".like-icon");

//Add an event listener to the like icon element
likeIcon.addEventListener("click", function() {
  //Toggle the class "liked" on the like icon element when clicked
  this.classList.toggle("liked");
});

//Center the page content
const pageContent = document.querySelector(".nav-container, .tweet-list");
pageContent.style.display = "flex";
pageContent.style.flexDirection = "column";
pageContent.style.alignItems = "center";

//Add hover effect with slight bounce to the tweet action buttons
const tweetBtns = document.querySelectorAll(".tweet-actions .tweet-btns button");

for (let i = 0; i < tweetBtns.length; i++) {
  tweetBtns[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transitionDuration = "0.3s";
  });
  
  tweetBtns[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
    this.style.transitionDuration = "0.3s";
  });
}

//Redirect to user profile page when user image is clicked
const userImg = document.querySelector(".user-img");

userImg.addEventListener("click", function() {
  window.location.href = "user-profile.html";
});

//Reshare the tweet when retweet button is clicked
const retweetBtn = document.querySelector(".quote-tweet-btn");

retweetBtn.addEventListener("click", function() {
  const tweetInput = document.querySelector(".tweet-input");
  const tweetText = tweetInput.value;
  
  tweetInput.value = `RT @johndoe: ${tweetText}`;
});



