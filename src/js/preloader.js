/**
 * SmartNetwork TJKT - High-Tech Entrance Preloader Animation
 */

export function initPreloader() {
  const preloader = document.getElementById('preloader-screen');
  const progressFill = document.getElementById('preloader-progress-fill');
  const progressText = document.getElementById('preloader-progress-text');
  const statusTicker = document.getElementById('preloader-status-ticker');

  if (!preloader) return;

  // Check prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    preloader.style.display = 'none';
    document.body.classList.add('loaded');
    return;
  }

  const statuses = [
    'Initializing Network Protocol...',
    'Establishing Gateway Link...',
    'Verifying Security Certificates...',
    'Connecting to SmartNetwork TJKT...',
    'System Ready ⚡'
  ];

  let progress = 0;
  let statusIndex = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18 + 12);
    if (progress > 100) progress = 100;

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${progress}%`;

    // Update status text
    const targetIndex = Math.min(statuses.length - 1, Math.floor((progress / 100) * statuses.length));
    if (targetIndex !== statusIndex && statusTicker) {
      statusIndex = targetIndex;
      statusTicker.textContent = statuses[statusIndex];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.add('loaded');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }, 300);
    }
  }, 100);
}
