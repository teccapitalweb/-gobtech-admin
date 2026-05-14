/* GobTech MX — main.js */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('is-open');
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function(el) { el.classList.add('is-visible'); });
  }

  // Smooth-scroll year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Form mock submit
  const form = document.querySelector('#contacto-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = '✓ Recibido — te contactamos en 24 hrs';
        btn.style.background = 'var(--success)';
        form.reset();
        setTimeout(function() {
          btn.textContent = original;
          btn.disabled = false;
          btn.style.background = '';
        }, 3500);
      }, 900);
    });
  }
});
