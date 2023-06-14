// Get the buttons
const likeButtons = document.querySelectorAll('.like-btn');
const retweetButtons = document.querySelectorAll('.retweet-btn');
const replyButtons = document.querySelectorAll('.reply-btn');

// Add event listeners to the buttons
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});

retweetButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('retweeted');
  });
});

// add emoticons to the post


replyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tweetId = button.dataset.tweetId;
    const tweet = document.getElementById(tweetId);
    const replyBox = tweet.querySelector('.reply-box');

    replyBox.style.display = 'block';
  });
});
