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
  if (Math.abs(isMobile() ? dx : dy) > 50)
    nav(getPage() + (isMobile() ? dx : -dy) / Math.abs(isMobile() ? dx : dy));
};

// Mouse drag
window.addEventListener('mousedown', e => {
  if (!e.target.closest('header') && !isMobile()) {
    isDragging = 1;
    startX = e.clientX;
    startY = e.clientY;
  }
}, true);

window.addEventListener('mouseup', e => isDragging && !isMobile() && (isDragging = 0, swipe(e.clientX, e.clientY)), true);

// Touch
addEventListener('touchstart', e => (startX = e.touches[0].clientX, startY = e.touches[0].clientY));
addEventListener('touchend', e => swipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY));

// Wheel
addEventListener('wheel', e => {
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
  if (k == `Arrow${isMobile() ? 'Left' : 'Up'}`) nav(p - 1);
  if (k == `Arrow${isMobile() ? 'Right' : 'Down'}`) nav(p + 1);
});

// Dots
document.querySelector('header').addEventListener('click', e => {
  if (!navigationEnabled) return;
  const s = getComputedStyle(document.documentElement);
  const pos = (isMobile() ? e.clientX : e.clientY) - e.currentTarget.getBoundingClientRect()[isMobile() ? 'left' : 'top'];
  nav(Math.min(4, Math.max(1, Math.floor(pos / parseFloat(s.getPropertyValue('--dot-spacing'))) + 1)));
});
