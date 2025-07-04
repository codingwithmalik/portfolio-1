// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('nav a, .btn-primary, .btn-secondary');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate hero section text on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(40px)';
    setTimeout(() => {
      hero.style.transition = 'all 0.8s cubic-bezier(.77,0,.18,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
});

// Form submission alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Button ripple effect
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}

document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// Section fade-in on scroll
window.addEventListener('DOMContentLoaded', () => {
  // Add .section-fade to all main sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-fade');
  });

  // IntersectionObserver for fade-in
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-fade').forEach(section => {
    observer.observe(section);
  });
});

// Sidebar navigation for mobile
const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

function openSidebar() {
  sidebar.classList.add('open');
  document.body.classList.add('sidebar-open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  document.body.classList.remove('sidebar-open');
}
if (hamburger && sidebar && closeSidebarBtn) {
  hamburger.addEventListener('click', openSidebar);
  closeSidebarBtn.addEventListener('click', closeSidebar);
}
sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});
