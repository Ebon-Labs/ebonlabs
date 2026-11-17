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
    toggle.setAttribute('aria-label', typeof t === 'function' ? t('nav.openMenu') : 'Abrir menu');
    document.body.classList.remove('nav-open');
  };

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open
      ? (typeof t === 'function' ? t('nav.closeMenu') : 'Fechar menu')
      : (typeof t === 'function' ? t('nav.openMenu') : 'Abrir menu'));
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

function initParallax() {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nodes = [...document.querySelectorAll('[data-parallax]')];
  if (!nodes.length) return;

  const hero = document.querySelector('.hero');
  const heroArt = document.querySelector('.hero__visual img');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let pointerX = 0;
  let pointerY = 0;
  let frame = 0;

  const update = () => {
    frame = 0;
    if (motion.matches) {
      nodes.forEach((el) => {
        el.style.transform = '';
      });
      return;
    }

    const vh = window.innerHeight || 1;
    nodes.forEach((el) => {
      const speed = Number(el.dataset.parallax) || 0.1;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -160 || rect.top > vh + 160) return;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const shift = Math.max(-40, Math.min(40, -progress * speed * 160));
      if (el === heroArt) {
        el.style.transform = `translate3d(${pointerX.toFixed(2)}px, ${(shift + pointerY).toFixed(2)}px, 0)`;
      } else {
        el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
      }
    });
  };

  const request = () => {
    if (frame) return;
    frame = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  motion.addEventListener('change', () => {
    pointerX = 0;
    pointerY = 0;
    request();
  });

  if (hero && heroArt && finePointer) {
    hero.addEventListener('pointermove', (event) => {
      if (motion.matches) return;
      const rect = hero.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      request();
    });
    hero.addEventListener('pointerleave', () => {
      pointerX = 0;
      pointerY = 0;
      request();
    });
  }

  request();
}

function initSiteWeb() {
  const canvas = document.querySelector('.site-web');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const colors = ['#015ef7', '#9b4dff', '#ff40a0', '#ff7a18'];
  const reach = 120;
  let nodes = [];
  let frame = 0;
  let running = false;
  let width = 0;
  let height = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const make = () => ({
    x: width * (0.48 + Math.random() * 0.48),
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    r: 1.15 + Math.random() * 1.15,
    phase: Math.random() * Math.PI * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  const seed = () => {
    const count = width < 800 ? 32 : 46;
    nodes = Array.from({ length: count }, make);
  };

  const draw = () => {
    frame = 0;
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    const minX = width * 0.48;

    nodes.forEach((node) => {
      node.phase += 0.012;
      node.vx += Math.sin(node.phase) * 0.008;
      node.vy += Math.cos(node.phase * 0.85) * 0.008;
      node.vx *= 0.986;
      node.vy *= 0.986;
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < minX) node.vx += 0.04;
      if (node.x > width - 8) node.vx -= 0.04;
      if (node.y < 8) node.vy += 0.04;
      if (node.y > height - 8) node.vy -= 0.04;
    });

    const seen = new Set();
    nodes.forEach((a, i) => {
      const nearest = [];
      for (let j = 0; j < nodes.length; j += 1) {
        if (i === j) continue;
        const b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < reach) nearest.push({ j, dist });
      }
      nearest.sort((p, q) => p.dist - q.dist);
      nearest.slice(0, 2).forEach((link) => {
        const key = i < link.j ? `${i}-${link.j}` : `${link.j}-${i}`;
        if (seen.has(key)) return;
        seen.add(key);
        ctx.strokeStyle = a.color;
        ctx.globalAlpha = (1 - link.dist / reach) * 0.34;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(nodes[link.j].x, nodes[link.j].y);
        ctx.stroke();
      });
    });

    nodes.forEach((node) => {
      ctx.globalAlpha = 0.62;
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    frame = requestAnimationFrame(draw);
  };

  const start = () => {
    if (running || motion.matches || document.hidden) return;
    running = true;
    frame = requestAnimationFrame(draw);
  };

  const stop = () => {
    running = false;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    ctx.clearRect(0, 0, width, height);
  };

  resize();
  seed();
  window.addEventListener('resize', () => {
    resize();
    seed();
  }, { passive: true });
  motion.addEventListener('change', () => {
    if (motion.matches) stop();
    else start();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });
  start();
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

function initCarousels() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('.carousel__track');
    const prev = root.querySelector('.carousel__prev');
    const next = root.querySelector('.carousel__next');
    if (!track || !prev || !next) return;

    const step = () => track.clientWidth;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 4;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max;
    };

    prev.addEventListener('click', () => {
      track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' });
    });
    next.addEventListener('click', () => {
      track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' });
    });
    track.addEventListener('scroll', update, { passive: true });
    update();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initWhatsapp();
renderCatalog();
initHeader();
initCarousels();
initParallax();
initSiteWeb();
initReveal();
if (typeof initI18n === 'function') initI18n();
