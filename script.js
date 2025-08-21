let isScrolling = false;
let scrollTimeout;
let startY = 0;
let startX = 0;
let navigationEnabled = false;

const isMobile = () => window.innerWidth < 1100;

// --- Page helpers ---
const getCurrentPage = () => parseInt(document.body.getAttribute('page') || '0');
const setPage = (page) => document.body.setAttribute('page', page);

const navigateToPage = (newPage) => {
  if (!navigationEnabled) return;
  const current = getCurrentPage();
  if (newPage < 1 || newPage > 4 || newPage === current) return;
  setPage(newPage);
};

// --- Navigation delay (intro animation) ---
const introMs = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue('--intro-duration')
) * 1000;

setTimeout(() => {
  navigationEnabled = true;
  setPage(1); // initial page
}, introMs + 200);

// --- Scroll ---
const handleScroll = (delta) => {
  if (!navigationEnabled || isScrolling || Math.abs(delta) < 8) return;

  isScrolling = true;
  navigateToPage(getCurrentPage() + (delta > 0 ? 1 : -1));

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => (isScrolling = false), 500);
};

// --- Swipe ---
const handleSwipe = (endX, endY) => {
  if (!navigationEnabled) return;

  const dx = startX - endX;
  const dy = startY - endY;
  const threshold = 50;

  if (isMobile()) {
    if (Math.abs(dx) > threshold) {
      navigateToPage(getCurrentPage() + (dx > 0 ? 1 : -1));
    }
  } else {
    if (Math.abs(dy) > threshold) {
      navigateToPage(getCurrentPage() + (dy > 0 ? -1 : 1));
    }
  }
};

// --- Keyboard ---
const handleKey = (key) => {
  if (!navigationEnabled) return;
  const current = getCurrentPage();

  if (isMobile()) {
    if (key === 'ArrowLeft') navigateToPage(current - 1);
    if (key === 'ArrowRight') navigateToPage(current + 1);
  } else {
    if (key === 'ArrowUp') navigateToPage(current - 1);
    if (key === 'ArrowDown') navigateToPage(current + 1);
  }
};

// --- Dots ---
const handleDotClick = (e) => {
  if (!navigationEnabled) return;

  const styles = getComputedStyle(document.documentElement);
  const dotSpacing = parseFloat(styles.getPropertyValue('--dot-spacing'));
  const totalPages = parseInt(styles.getPropertyValue('--total-pages'));

  const rect = e.currentTarget.getBoundingClientRect();
  const pos = isMobile() ? e.clientX - rect.left : e.clientY - rect.top;

  const targetPage = Math.min(
    Math.max(1, Math.floor(pos / dotSpacing) + 1),
    totalPages
  );

  navigateToPage(targetPage);
};

// --- Event bindings ---
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});
document.addEventListener('touchend', (e) => {
  handleSwipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
});
document.addEventListener('wheel', (e) => {
  e.preventDefault();
  handleScroll(e.deltaY);
}, { passive: false });
document.addEventListener('keydown', (e) => handleKey(e.key));
document.querySelector('header').addEventListener('click', handleDotClick);
