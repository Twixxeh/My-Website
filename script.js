
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navs ul');
const overlay = document.querySelector('.overlay');
const picImg = document.querySelector('.pic img');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('show');
  const isOpen = navUl.classList.contains('show');
  hamburger.setAttribute('aria-expanded', isOpen);
});

overlay.addEventListener('click', () => {
  navUl.classList.remove('show');
  hamburger.classList.remove('active');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded', false);
});

if (window.matchMedia('(max-width: 768px)').matches && picImg) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        picImg.classList.add('in-view');
        picImg.classList.add('animate-loop');
        observer.unobserve(picImg);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(picImg);
}
