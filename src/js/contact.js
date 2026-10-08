/**
 * SmartNetwork TJKT - Contact & WhatsApp Generator Module
 */

import { showToast } from './toast.js';

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const waBtn = document.getElementById('btn-direct-wa');

  const PLACEHOLDER_WA = '6281234567890'; // Easy placeholder for WhatsApp hotline

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const wa = document.getElementById('contact-wa')?.value.trim();
      const service = document.getElementById('contact-service')?.value;
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !wa || !message) {
        showToast('Mohon lengkapi semua kolom formulir yang wajib diisi!', 'warning');
        return;
      }

      showToast(`Terima kasih ${name}, pesan Anda telah berhasil dikirim! Tim SmartNetwork TJKT akan menghubungi Anda via email (aldhan@gmail.com).`, 'success');
      form.reset();
    });
  }

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const name = document.getElementById('contact-name')?.value.trim() || 'Pengunjung';
      const service = document.getElementById('contact-service')?.value || 'Konsultasi Jaringan';
      const message = document.getElementById('contact-message')?.value.trim() || 'Halo SmartNetwork TJKT, saya ingin berkonsultasi mengenai solusi jaringan.';

      const text = encodeURIComponent(`Halo SmartNetwork TJKT!\nNama: ${name}\nLayanan: ${service}\nPesan: ${message}`);
      window.open(`https://wa.me/${PLACEHOLDER_WA}?text=${text}`, '_blank');
    });
  }
}
