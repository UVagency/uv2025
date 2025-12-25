/**
 * Custom cursor implementation that follows the mouse and changes state on hover
 * Optimized for performance - no delay, instant follow
 */
let isInitialized = false;

export function initCustomCursor() {
  if (isInitialized) return;

  // Check if device is mobile (User Agent only)
  // We rely on CSS media queries to hide it on small screens (e.g. resized desktop window)
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Don't initialize custom cursor on mobile devices (touch only)
  if (isMobileUA) {
    return;
  }

  isInitialized = true;

  // Create cursor element if it doesn't exist
  let cursor = document.querySelector('.custom-cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    // Ensure pointer-events is none
    cursor.style.pointerEvents = 'none';
    document.body.appendChild(cursor);
  }

  // State for cursor
  let isVisible = false;
  let isClicking = false;
  let isHovering = false;

  // Show cursor when it's loaded
  const showCursor = () => {
    cursor.style.display = 'block';
    isVisible = true;
  };

  if (document.readyState === 'complete') {
    showCursor();
  } else {
    window.addEventListener('load', showCursor);
  }

  // Update cursor position on move - direct follow without delay
  document.addEventListener('mousemove', (e) => {
    if (!isVisible) {
      cursor.style.display = 'block';
      isVisible = true;
    }
    
    // Apply transform directly without lerp/smoothing for instant response
    const scale = isClicking ? 0.5 : 1;
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${scale})`;
    
    // Update hover state
    if (isHovering) {
      cursor.classList.add('hover');
    } else {
      cursor.classList.remove('hover');
    }
  }, { passive: true });
  
  // Check if element is clickable
  const isClickable = (element) => {
    if (!element) return false;
    
    const tagName = element.tagName?.toLowerCase();
    if (['a', 'button', 'input', 'select', 'textarea', 'label'].includes(tagName)) return true;
    if (element.getAttribute('role') === 'button') return true;
    if (element.classList && element.classList.contains('cursor-pointer')) return true;
    
    return false;
  };

  // Handle hover states using mouseover/out delegation
  document.addEventListener('mouseover', (e) => {
    let target = e.target;
    let clickableFound = false;
    
    // Check up to 10 levels up for clickable elements to avoid deep traversal
    let depth = 0;
    while (target && target !== document && depth < 10) {
      if (isClickable(target)) {
        clickableFound = true;
        break;
      }
      target = target.parentElement;
      depth++;
    }
    
    isHovering = clickableFound;
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    // Only reset if we're leaving the window or a clickable element
    if (!e.relatedTarget) {
       isHovering = false;
    }
  }, { passive: true });

  // Handle click animation
  document.addEventListener('mousedown', () => {
    isClicking = true;
  });

  document.addEventListener('mouseup', () => {
    isClicking = false;
  });

  // Hide cursor when leaving the window
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    isVisible = true;
  });
}