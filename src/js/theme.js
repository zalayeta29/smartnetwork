/**
 * SmartNetwork TJKT - Theme Switcher (Dark/Light Mode)
 */

export function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('smartnetwork-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('smartnetwork-theme', newTheme);
      updateToggleIcon(newTheme);
    });
  }
}

function updateToggleIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  if (theme === 'light') {
    toggleBtn.innerHTML = '🌙';
    toggleBtn.setAttribute('title', 'Beralih ke Dark Mode');
  } else {
    toggleBtn.innerHTML = '☀️';
    toggleBtn.setAttribute('title', 'Beralih ke Light Mode');
  }
}
