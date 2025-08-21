/* eslint-disable eqeqeq */
let isScrolling, startY, startX, isDragging, navigationEnabled;
const isMobile = () => innerWidth < 1100;
const getPage = () => +document.body.getAttribute('page') || 0;
const setPage = p => document.body.setAttribute('page', p);
const nav = p => navigationEnabled && p > 0 && p < 5 && p != getPage() && setPage(p);

// Enable after intro
setTimeout(() => (navigationEnabled = 1, setPage(1)),
  parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--intro-duration')) * 1000);

// Handle all swipes/drags
const swipe = (endX, endY) => {
  if (!navigationEnabled) return;
  const dx = startX - endX, dy = startY - endY;

  if (isMobile()) {
    // Only horizontal swipes on mobile
    if (Math.abs(dx) > 50)
      nav(getPage() + (dx > 0 ? 1 : -1));
  } else {
    // Only vertical swipes on desktop
    if (Math.abs(dy) > 50)
      nav(getPage() + (dy > 0 ? 1 : -1));
  }
};

// Mouse drag (desktop only)
window.addEventListener('mousedown', e => {
  if (!e.target.closest('header') && !isMobile()) {
    isDragging = 1;
    startX = e.clientX;
    startY = e.clientY;
  }
}, true);

window.addEventListener('mouseup', e =>
  isDragging && !isMobile() && (isDragging = 0, swipe(e.clientX, e.clientY)), true);

// Touch (mobile only)
addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});
addEventListener('touchend', e => swipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY));

// Wheel (desktop only)
addEventListener('wheel', e => {
  if (isMobile()) return; // disable wheel on mobile
  e.preventDefault();
  if (!navigationEnabled || isScrolling || Math.abs(e.deltaY) < 8) return;
  isScrolling = 1;
  nav(getPage() + (e.deltaY > 0 ? 1 : -1));
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => isScrolling = 0, 500);
}, { passive: false });

// Keyboard
addEventListener('keydown', e => {
  if (!navigationEnabled) return;
  const k = e.key, p = getPage();
  if (isMobile()) {
    if (k == 'ArrowLeft') nav(p - 1);
    if (k == 'ArrowRight') nav(p + 1);
  } else {
    if (k == 'ArrowUp') nav(p - 1);
    if (k == 'ArrowDown') nav(p + 1);
  }
});

// Dots
document.querySelector('header').addEventListener('click', e => {
  if (!navigationEnabled) return;
  const s = getComputedStyle(document.documentElement);
  const rect = e.currentTarget.getBoundingClientRect();
  const pos = (isMobile() ? e.clientX - rect.left : e.clientY - rect.top);
  nav(Math.min(4, Math.max(1, Math.floor(pos / parseFloat(s.getPropertyValue('--dot-spacing'))) + 1)));
});
