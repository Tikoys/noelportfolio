function toggleMode() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Thank you! Your message has been received.");

  this.reset();
});
