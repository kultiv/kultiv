/* ============================================================
   KULTIV · Animations & Interactions
   ============================================================ */

(function () {
  'use strict';

  // ── Scroll Reveal ─────────────────────────────────────────
  function initScrollReveal() {
    const elements = document.querySelectorAll('.k-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ── Animated Counter ──────────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }

    requestAnimationFrame(update);
  }

  // ── Marquee / Ticker ──────────────────────────────────────
  function initMarquees() {
    const marquees = document.querySelectorAll('.k-marquee-track');
    marquees.forEach((track) => {
      const clone = track.innerHTML;
      track.innerHTML = clone + clone;
    });
  }

  // ── Sticky Header Scroll State ────────────────────────────
  function initStickyHeader() {
    const header = document.querySelector('.header-wrapper');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > 80) {
        header.classList.add('k-header--scrolled');
      } else {
        header.classList.remove('k-header--scrolled');
      }
      lastScroll = current;
    }, { passive: true });
  }

  // ── Init ──────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initCounters();
    initMarquees();
    initStickyHeader();
  });
})();
