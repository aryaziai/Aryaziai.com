let isScrolling = false;
let scrollTimeout;
let startY = 0;
let navigationEnabled = false;

// Get current page from body attribute
const getCurrentPage = () => parseInt(document.body.getAttribute('page') || '0');

// Set page on body element
const setPage = (pageNum) => {
  document.body.setAttribute('page', pageNum);
};

// Get intro duration from CSS and enable navigation after it completes
const introDuration = getComputedStyle(document.documentElement)
  .getPropertyValue('--intro-duration');
const introMs = parseFloat(introDuration) * 1000;

setTimeout(() => {
  navigationEnabled = true;
  setPage(1); // Set initial page when navigation is enabled
}, introMs + 200); // Add 200ms to match body animation

// Navigate to a new page
const navigateToPage = (newPage) => {
  if (!navigationEnabled) return;

  const currentPage = getCurrentPage();
  if (newPage < 1 || newPage > 4 || newPage === currentPage) return;

  setPage(newPage);
};

// Handle scroll with direction
const handleScroll = (delta) => {
  if (!navigationEnabled || isScrolling || Math.abs(delta) < 8) return;

  isScrolling = true;
  const currentPage = getCurrentPage();
  navigateToPage(currentPage + (delta > 0 ? 1 : -1));

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => (isScrolling = false), 500);
};

// Handle swipe gesture - REVERSED for natural mobile feel
const handleSwipe = (endY) => {
  if (!navigationEnabled) return;

  const diff = startY - endY;
  if (Math.abs(diff) > 50) {
    const currentPage = getCurrentPage();
    // Reversed: swipe down (negative diff) goes to next page (+1)
    navigateToPage(currentPage + (diff > 0 ? -1 : 1));
  }
};

// Touch events
document.addEventListener('touchstart', (e) => (startY = e.touches[0].clientY));
document.addEventListener('touchend', (e) => handleSwipe(e.changedTouches[0].clientY));

// Wheel event
document.addEventListener('wheel', (e) => {
  e.preventDefault();
  handleScroll(e.deltaY);
}, { passive: false });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!navigationEnabled) return;

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const currentPage = getCurrentPage();
    navigateToPage(currentPage + (e.key === 'ArrowDown' ? 1 : -1));
  }
});

// Add click handler for navigation dots
document.querySelector('header').addEventListener('click', (e) => {
  if (!navigationEnabled) return;

  // Get CSS variables from the root element
  const styles = getComputedStyle(document.documentElement);
  const dotSpacing = parseFloat(styles.getPropertyValue('--dot-spacing'));
  const totalPages = parseInt(styles.getPropertyValue('--total-pages'));

  // Get click position relative to the header element
  const rect = e.currentTarget.getBoundingClientRect();
  const clickY = e.clientY - rect.top;

  // Determine which dot was clicked based on Y position and spacing
  const targetPage = Math.min(
    Math.max(1, Math.floor(clickY / dotSpacing) + 1),
    totalPages
  );

  navigateToPage(targetPage);
});

