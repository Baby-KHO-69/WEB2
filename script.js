// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function toggleBlur(clickedImg) {
    var body = document.body;
    
    // Toggle the blur effect by adding/removing CSS class
    body.classList.toggle('blurred');
    
    // Toggle fullscreen class to display clicked image in full size
    clickedImg.classList.toggle('fullscreen');
}
  