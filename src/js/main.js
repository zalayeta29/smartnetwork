/**
 * SmartNetwork TJKT - Main JavaScript Entry Point
 */

import { initPreloader } from './preloader.js';
import { initTheme } from './theme.js';
import { initNetworkBackground } from './network-bg.js';
import { initLoginModal } from './login.js';
import { renderServices } from './services.js';
import { initTopologySection } from './topology.js';
import { initMonitoringSection } from './monitoring.js';
import { initCalculators } from './calculators.js';
import { renderProjects } from './projects.js';
import { renderTutorials } from './tutorials.js';
import { renderFaq } from './faq.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Entrance Preloader Animation
  initPreloader();

  // 1. Core Systems Initialization
  initTheme();
  initNetworkBackground();
  initLoginModal();
  initNavbar();
  initScrollProgress();
  initBackToTop();
  initGlobalModalClose();

  // 2. Feature Modules Initialization
  renderServices();
  initTopologySection();
  initMonitoringSection();
  initCalculators();
  renderProjects();
  renderTutorials();
  renderFaq();
  initContactForm();

  // 3. Stats Counter Observer
  animateStats();
});

/* Sticky Navbar & Mobile Navigation */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Glass blur effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isActive = hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section observer on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 130;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  });
}

/* Scroll Progress Indicator Bar */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';
  });
}

/* Back to Top Button */
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Global Modal Closer & Accessibility ESC Key Handler */
function initGlobalModalClose() {
  const modalOverlay = document.getElementById('global-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // ESC key listener to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* Animated Hero Stats Counter */
function animateStats() {
  const statElements = document.querySelectorAll('.stat-num[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 30;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.textContent = (target % 1 === 0 ? Math.ceil(count) : count.toFixed(1)) + suffix;
            setTimeout(updateCount, 40);
          } else {
            el.textContent = target + suffix;
          }
        };

        updateCount();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}
