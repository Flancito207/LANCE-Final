document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');

  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle('show', window.scrollY > 250);
  };

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const carouselElement = document.querySelector('#lanceCarousel');
  if (carouselElement && window.bootstrap?.Carousel) {
    const carousel = window.bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 5000,
      ride: 'carousel',
      pause: false,
      touch: true
    });
    carousel.cycle();
  }
});
