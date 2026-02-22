// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
  // Mark active link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
});
