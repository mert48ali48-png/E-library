// Show/hide Back-to-Top button when scrolling
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle (remembers choice)
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'dark') root.classList.add('dark');

toggle?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  toggle.textContent = root.classList.contains('dark') ? '☀️' : '🌙';
});
toggle && (toggle.textContent = root.classList.contains('dark') ? '☀️' : '🌙');

// Reveal-on-scroll for book cards
const revealItems = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.2});
revealItems.forEach(el=>io.observe(el));

// Back to top
const backToTop = document.getElementById('backToTop');
backToTop?.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});
