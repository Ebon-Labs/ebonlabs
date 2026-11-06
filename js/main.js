const ITEMS = [
  {
    id: 'exemplo',
    name: 'Item de exemplo',
    desc: 'Substitua este array pelos produtos ou serviços do cliente.',
    price: 'R$ 0',
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function whatsappUrl(text) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function renderCatalog() {
  const list = document.getElementById('catalogo-lista');
  if (!list) return;

  list.innerHTML = ITEMS.map((item) => {
    const href = whatsappUrl(`Olá! Quero saber mais sobre ${item.name}.`);
    return `
      <article class="card reveal" aria-labelledby="item-${escapeHtml(item.id)}">
        <h3 class="card__name" id="item-${escapeHtml(item.id)}">${escapeHtml(item.name)}</h3>
        <p class="card__desc">${escapeHtml(item.desc)}</p>
        <div class="card__footer">
          <p class="card__price">${escapeHtml(item.price)}</p>
          <a class="card__action" href="${href}" target="_blank" rel="noopener noreferrer">Pedir no WhatsApp</a>
        </div>
      </article>
    `;
  }).join('');
}

function initWhatsapp() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = whatsappUrl(link.dataset.whatsapp);
  });
}

function initHeader() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!header || !toggle || !links) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('nav-open');
  };

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('nav-open', open);
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
}

function initReveal() {
  const targets = document.querySelectorAll('.reveal:not(.visible)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initWhatsapp();
renderCatalog();
initHeader();
initReveal();
