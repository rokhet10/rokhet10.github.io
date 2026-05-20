// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));

function toggleProject(card) {
  card.classList.toggle('open');
}

function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

function closeNav() {
  document.getElementById('nav-links').classList.remove('open');
}

// Graceful fallback if profile photo is missing
const img = document.getElementById('profile-img');
if (img) {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const wrapper = img.parentElement;
    wrapper.style.background = '#ccc';
    const placeholder = document.createElement('span');
    placeholder.textContent = 'Photo';
    placeholder.style.cssText = 'color:#888;font-size:0.9rem;';
    wrapper.appendChild(placeholder);
  });
}
