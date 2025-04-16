/**
 * Custom cursor implementation that follows the mouse and changes state on hover
 */
export function initCustomCursor() {
  // Create cursor element if it doesn't exist
  if (!document.querySelector('.custom-cursor')) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  }

  const cursor = document.querySelector('.custom-cursor');

  // Show cursor when it's loaded
  window.addEventListener('load', () => {
    cursor.style.display = 'block';
  });

  // Update cursor position
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });
  
  // Check if element is clickable
  const isClickable = (element) => {
    if (!element) return false;
    
    // Check tag name
    const tagName = element.tagName?.toLowerCase();
    if (['a', 'button', 'input', 'select', 'textarea', 'label'].includes(tagName)) {
      return true;
    }
    
    // Check for role="button"
    if (element.getAttribute('role') === 'button') {
      return true;
    }
    
    // Check for tabindex
    if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1') {
      return true;
    }
    
    // Check for cursor-pointer class
    if (element.classList && element.classList.contains('cursor-pointer')) {
      return true;
    }
    
    // Check computed style
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.cursor === 'pointer') {
      return true;
    }
    
    return false;
  };

  // Handle mouse movement over elements
  document.addEventListener('mousemove', (e) => {
    // Get the element under the cursor and check its ancestors
    let target = e.target;
    let clickableFound = false;
    
    // Check the current element and its parents (bubble up)
    while (target && target !== document && !clickableFound) {
      if (isClickable(target)) {
        cursor.classList.add('hover');
        clickableFound = true;
      }
      target = target.parentElement;
    }
    
    // If no clickable element was found, remove the hover state
    if (!clickableFound) {
      cursor.classList.remove('hover');
    }
  }, { passive: true });

  // Handle click animation
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Hide cursor when leaving the window
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
  });
} 