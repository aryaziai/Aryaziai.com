/* eslint-disable eqeqeq */
let isDragging = false,
  startX = 0,
  startY = 0,
  navigationEnabled = false,
  lastPage = 0,
  swipeLocked = false;

const isMobile = () => 'ontouchstart' in window; // real mobile devices only
const isSmallScreen = () => innerWidth < 1100;

const getPage = () => +document.body.getAttribute('page') || 0;

const setPage = (p) => {
  const currentPage = getPage();
  if (!isMobile() && currentPage !== 0) {
    // Clear any ongoing animation by forcing a reflow
    document.body.style.animation = 'none';
    document.body.offsetHeight; // Force reflow
    document.body.style.animation = '';

    document.body.setAttribute('data-direction', p > currentPage ? 'down' : 'up');
  }
  document.body.setAttribute('page', p);
  lastPage = currentPage;
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

// Swipe handling (desktop and mobile)
const swipe = (endX, endY) => {
  if (!navigationEnabled || swipeLocked) return;

  const dx = startX - endX,
    dy = startY - endY;
  const resistance = 120; // minimum distance to trigger a swipe
  let delta = 0;

  if (isMobile() || isSmallScreen()) {
    // Horizontal swipe for mobile or small screens
    if (Math.abs(dx) > resistance) delta = dx > 0 ? 1 : -1;
  } else {
    // Vertical swipe for large desktop screens
    if (Math.abs(dy) > resistance) delta = dy > 0 ? 1 : -1;
  }

  if (delta) {
    swipeLocked = true;
    nav(getPage() + delta);
    setTimeout(() => swipeLocked = false, 400);
  }
};

// Mouse drag (all computers)
window.addEventListener('mousedown', e => {
  if (!e.target.closest('header') && !isMobile()) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
  }
}, true);

window.addEventListener('mouseup', e => {
  if (isDragging) {
    isDragging = false;
    swipe(e.clientX, e.clientY);
  }
}, true);

// Touch events (mobile only)
addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

addEventListener('touchend', e => {
  swipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
});

// Wheel scrolling (desktop only)
addEventListener('wheel', e => {
  if (isMobile() || isSmallScreen()) return; // disable wheel for mobile/small screens
  e.preventDefault();
  if (!navigationEnabled || swipeLocked || Math.abs(e.deltaY) < 8) return;

  swipeLocked = true;
  nav(getPage() + (e.deltaY > 0 ? 1 : -1));
  setTimeout(() => swipeLocked = false, 400);
}, { passive: false });

// Keyboard navigation
addEventListener('keydown', e => {
  if (!navigationEnabled || swipeLocked) return;
  const p = getPage();

  if (isSmallScreen()) {
    // Small screens: left/right arrows
    if (e.key === 'ArrowLeft') nav(p - 1);
    if (e.key === 'ArrowRight') nav(p + 1);
  } else {
    // Large screens: up/down arrows
    if (e.key === 'ArrowUp') nav(p - 1);
    if (e.key === 'ArrowDown') nav(p + 1);
  }

  swipeLocked = true;
  setTimeout(() => swipeLocked = false, 400);
});

// Dots navigation
document.querySelector('header').addEventListener('click', e => {
  if (!navigationEnabled || swipeLocked) return;
  const s = getComputedStyle(document.documentElement);
  const rect = e.currentTarget.getBoundingClientRect();
  const pos = (isMobile() || isSmallScreen()) ? e.clientX - rect.left : e.clientY - rect.top;

  nav(Math.min(4, Math.max(1, Math.floor(pos / parseFloat(s.getPropertyValue('--dot-spacing'))) + 1)));

  swipeLocked = true;
  setTimeout(() => swipeLocked = false, 400);
});
