const composeButton = document.querySelector('.compose');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const form = document.querySelector('.compose-form');
const postSection = document.querySelector('.post-section');

composeButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = form.elements.text.value;

  // Create new post element and set its text content
  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.textContent = text;

  // Add new post element to the top of the post section
  postSection.insertBefore(newPost, postSection.firstChild);

  // Reset the form
  form.reset();

  // Scroll to the top of the page to show the latest post
  window.scrollTo(0, 0);
});
