const scrollTopBtn = document.getElementById('scrollTopBtn');
const homeImages = document.querySelector('img'); // Detect image element

window.onscroll = function () {
  // Show the button when scrolled down 200px
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "flex"; // Show button
  } else {
    scrollTopBtn.style.display = "none"; // Hide button
  }
  
  // Hide button when images come into view
  const imagePosition = homeImages.getBoundingClientRect().top;
  if (imagePosition < window.innerHeight && imagePosition > 0) {
    scrollTopBtn.style.display = "none"; // Hide when image is in view
  }
};

// Scroll to top function
scrollTopBtn.addEventListener('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});