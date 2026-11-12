// Opener: hide the scroll hint once the reader starts scrolling, and respect
// "reduce motion" for background video.
(function () {
  const opener = document.querySelector('.opener');
  if (!opener) return;
  const onScroll = () => opener.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const video = opener.querySelector('video');
  if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause();
    video.removeAttribute('autoplay');
  }
})();
