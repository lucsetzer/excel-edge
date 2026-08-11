// ─── Shared Navigation ──────────────────────────────────────
// Edit this file to update the nav across ALL pages at once.

const NAV_LINKS = [
  { href: 'index.html',         label: 'Home',             icon: '🏠' },
  { href: 'formulas.html',      label: 'Formula Lookup',   icon: 'ƒx' },
  { href: 'errors.html',        label: 'Error Lookup',     icon: '⚠' },
  { href: 'mac-shortcuts.html', label: 'Mac Shortcuts',    icon: '⌨', badge: 'Mac' },
  { href: 'how-to.html',        label: 'How-to Guide',     icon: '' },
];

function buildNav() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  // Logo
  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.className = 'nav-logo';
  logo.setAttribute('aria-label', 'ExcelEdge Home');
  logo.innerHTML = `
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#21a366"/>
      <path d="M6 8h6l3 5-3 5H6l3-5z" fill="white" opacity="0.9"/>
      <path d="M15 8h7v3h-4v2h4v2h-4v2h4v3h-7z" fill="white" opacity="0.9"/>
    </svg>
    <span>Excel</span>Edge`;
  nav.appendChild(logo);

  // Links
  const ul = document.createElement('ul');
  ul.className = 'nav-links';
  ul.id = 'navLinks';

  NAV_LINKS.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    if (link.badge) {
      const badge = document.createElement('span');
      badge.className = 'nav-badge';
      badge.textContent = link.badge;
      a.appendChild(badge);
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Mobile toggle
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.id = 'navToggle';
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  toggle.addEventListener('click', () => {
    const isOpen = ul.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  nav.appendChild(toggle);

  document.body.insertBefore(nav, document.body.firstChild);
}

document.addEventListener('DOMContentLoaded', buildNav);
