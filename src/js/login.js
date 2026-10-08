/**
 * SmartNetwork TJKT - Demo Login & Modal Authentication Module
 * 
 * NOTE FOR DEVELOPERS:
 * This is a DEMO Login interface designed for frontend presentation.
 * No real passwords or sensitive credentials are stored in localStorage or sent over network.
 * In the future, this handler can be connected to a real backend API endpoint (e.g. POST /api/v1/auth/login).
 */

import { showToast } from './toast.js';

export function initLoginModal() {
  const loginTriggerBtns = document.querySelectorAll('.login-trigger-btn');
  const modalOverlay = document.getElementById('login-modal');
  const modalCloseBtn = document.getElementById('login-modal-close');
  const loginForm = document.getElementById('login-demo-form');
  const submitBtn = document.getElementById('btn-submit-login');
  const forgotPassBtn = document.getElementById('btn-forgot-password');

  if (!modalOverlay) return;

  function openLoginModal() {
    modalOverlay.classList.add('active');
  }

  function closeLoginModal() {
    modalOverlay.classList.remove('active');
  }

  loginTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openLoginModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeLoginModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeLoginModal();
    }
  });

  // Keyboard ESC listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeLoginModal();
    }
  });

  if (forgotPassBtn) {
    forgotPassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Fitur Lupa Password: Silakan hubungi Administrator TJKT via email aldhan@gmail.com', 'info');
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');

      const email = emailInput?.value.trim() || '';
      const password = passInput?.value.trim() || '';

      // 1. Validation Checks
      if (!email) {
        showToast('Email wajib diisi!', 'warning');
        emailInput?.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Format email tidak valid! (Contoh: user@gmail.com)', 'error');
        emailInput?.focus();
        return;
      }

      if (!password) {
        showToast('Password wajib diisi!', 'warning');
        passInput?.focus();
        return;
      }

      // 2. Demo Authentication Loading Animation
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳ Autentikasi Demo...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Login ➔</span>`;
        }

        showToast(`Demo login berhasil. Selamat datang kembali, ${email}!`, 'success');
        
        // Reset sensitive inputs (DO NOT store password in localStorage)
        if (passInput) passInput.value = '';
        closeLoginModal();
      }, 1200);
    });
  }
}
