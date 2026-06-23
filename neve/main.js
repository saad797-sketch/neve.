// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ─── NAV HIDE / SHOW ON SCROLL ───
let lastScrollY = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  nav.style.transition = 'transform 0.35s ease';
  nav.style.transform = (currentY > lastScrollY && currentY > 80)
    ? 'translateY(-100%)'
    : 'translateY(0)';
  lastScrollY = currentY;
});

// ─── SMOOTH SCROLL BOTONES HERO ───
document.addEventListener('DOMContentLoaded', () => {
  const btnSabores = document.getElementById('btn-sabores');
  const btnNosotros = document.getElementById('btn-nosotros');

  if (btnSabores) {
    btnSabores.addEventListener('click', () => {
      document.getElementById('sabores').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnNosotros) {
    btnNosotros.addEventListener('click', () => {
      document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ─── NAV CTA ───
  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.addEventListener('click', () => {
      document.getElementById('sabores').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ─── FORMULARIO SUSCRIPCION ───
  const ctaBtn = document.getElementById('cta-submit');
  const ctaInput = document.getElementById('cta-email');

  if (ctaBtn && ctaInput) {
    ctaBtn.addEventListener('click', () => {
      const email = ctaInput.value.trim();
      if (!email || !email.includes('@')) {
        ctaInput.style.borderColor = '#C85C72';
        ctaInput.placeholder = 'Ingresa un correo valido';
        return;
      }
      ctaBtn.textContent = 'Listo, te avisamos pronto';
      ctaBtn.style.background = '#5ABAAA';
      ctaInput.value = '';
      ctaInput.style.borderColor = '';
    });
  }
});
