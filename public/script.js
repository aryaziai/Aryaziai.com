let isDragging = false,
  startX = 0,
  startY = 0,
  navigationEnabled = false,
  swipeLocked = false;

const isMobile = () => 'ontouchstart' in window;
const isSmallScreen = () => innerWidth < 1100;
const getPage = () => +document.body.getAttribute('page') || 0;

const setPage = (p) => {
  const currentPage = getPage();
  if (currentPage !== 0 && currentPage !== p) {
    const body = document.body;
    const direction = p > currentPage ?
      (isMobile() || isSmallScreen() ? 'right' : 'down') :
      (isMobile() || isSmallScreen() ? 'left' : 'up');

    body.style.animation = 'none';
    body.offsetHeight; // Force reflow
    body.style.animation = `page${direction.charAt(0).toUpperCase() + direction.slice(1)} var(--page-transition) cubic-bezier(0.4, 0, 0.2, 1) both`;
    setTimeout(() => body.removeAttribute('style'), 400);
  }
  document.body.setAttribute('page', p);
};

const nav = (p) => {
  if (!navigationEnabled || p <= 0 || p >= 5 || p === getPage()) return;
  setPage(p);
};

// Enable navigation after intro
setTimeout(() => {
  navigationEnabled = true;
  setPage(1);
}, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--intro-duration')) * 1000 + 1000);

// Swipe handling
const swipe = (endX, endY) => {
  if (!navigationEnabled || swipeLocked) return;
  const dx = startX - endX;
  const dy = startY - endY;
  const resistance = 120;

  const checkSwipe = (delta, direction) => {
    if (Math.abs(delta) > resistance) {
      swipeLocked = true;
      if (isMobile() || isSmallScreen()) {
        // Small screens: natural direction (positive delta = forward)
        nav(getPage() + (direction > 0 ? 1 : -1));
      } else {
        // Large screens: natural direction for mouse drag (positive delta = forward)
        nav(getPage() + (direction > 0 ? 1 : -1));
      }
      setTimeout(() => swipeLocked = false, 100);
    }
  };

  if (isMobile() || isSmallScreen()) {
    checkSwipe(dx, dx);
  } else {
    checkSwipe(dy, dy);
  }
};

// Mouse events
addEventListener('mousedown', e => {
  if (!e.target.closest('header') && !isMobile() && !swipeLocked) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
  }
}, true);

addEventListener('mouseup', e => {
  if (isDragging) {
    isDragging = false;
    if (!swipeLocked) swipe(e.clientX, e.clientY);
  }
}, true);

// Touch events
addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

addEventListener('touchend', e => {
  swipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
});

// Wheel scrolling with debouncing
let wheelTimeout;
addEventListener('wheel', e => {
  if (isMobile() || isSmallScreen()) return;
  e.preventDefault();
  if (!navigationEnabled || swipeLocked || Math.abs(e.deltaY) < 8) return;

  clearTimeout(wheelTimeout);
  wheelTimeout = setTimeout(() => {
    if (!swipeLocked) {
      swipeLocked = true;
      // Inverted: positive deltaY goes back, negative goes forward
      nav(getPage() + (e.deltaY > 0 ? -1 : 1));
      setTimeout(() => swipeLocked = false, 100);
    }
  }, 20);
}, { passive: false });

// Keyboard navigation
addEventListener('keydown', e => {
  if (!navigationEnabled || swipeLocked) return;
  const p = getPage();
  const keys = isSmallScreen() ?
    { ArrowLeft: p - 1, ArrowRight: p + 1 } :
    { ArrowUp: p - 1, ArrowDown: p + 1 };

  if (keys[e.key]) {
    nav(keys[e.key]);
    swipeLocked = true;
    setTimeout(() => swipeLocked = false, 400);
  }
});

// Dots navigation
document.querySelector('header').addEventListener('click', e => {
  if (!navigationEnabled || swipeLocked) return;
  const s = getComputedStyle(document.documentElement);
  const rect = e.currentTarget.getBoundingClientRect();
  const pos = (isMobile() || isSmallScreen()) ? e.clientX - rect.left : e.clientY - rect.top;
  const page = Math.min(4, Math.max(1, Math.floor(pos / parseFloat(s.getPropertyValue('--dot-spacing'))) + 1));

  nav(page);
  swipeLocked = true;
  setTimeout(() => swipeLocked = false, 400);
});
