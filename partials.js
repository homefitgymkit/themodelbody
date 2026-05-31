/* =========================================================================
   The Model Body Club — shared header + footer.
   Injects identical chrome into every page. Set <body data-page="club">
   to auto-highlight the active nav item.
   ========================================================================= */
(function () {
  var NAV = [
    { key: 'club',    label: 'The Club',  href: 'club.html' },
    { key: 'coaching',label: 'Coaching',  href: 'coaching.html' },
    { key: 'guides',  label: 'Guides',    href: 'guides.html' },
    { key: 'free',    label: 'Free Gifts',href: 'free-meal-plan.html' },
    { key: 'about',   label: 'About',     href: 'about.html' }
  ];

  var active = document.body.getAttribute('data-page') || '';

  /* ---- HEADER ---- */
  var navLinks = NAV.map(function (n) {
    var cur = n.key === active ? ' aria-current="page"' : '';
    return '<a href="' + n.href + '"' + cur + '>' + n.label + '</a>';
  }).join('');

  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<div class="site-header__inner">' +
      '<a class="brand" href="index.html" aria-label="The Model Body Club, home">' +
        '<span class="brand__cherry">🍒</span>' +
        '<span class="brand__name">The Model Body <b>Club</b></span>' +
      '</a>' +
      '<nav class="nav" id="primary-nav">' + navLinks + '</nav>' +
      '<div class="header-actions">' +
        '<a class="btn" href="club.html">Join the Club</a>' +
      '</div>' +
      '<button class="nav-toggle" aria-label="Menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div>';

  /* ---- FOOTER ---- */
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  var year = new Date().getFullYear();
  footer.innerHTML =
    '<div class="site-footer__inner">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<div class="footer-brand__lockup">' +
            '<span style="font-size:26px">🍒</span>' +
            '<span class="footer-brand__name">The Model Body <b>Club</b></span>' +
            '<a class="footer-brand__handle" href="https://instagram.com/kassyalicee" target="_blank" rel="noopener">@KassyAlicee</a>' +
          '</div>' +
          '<p>Smart strength training and clean, high-protein eating for a toned, feminine physique. No restriction, no burnout.</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Explore</h4>' +
          '<ul>' +
            '<li><a href="club.html">The Club</a></li>' +
            '<li><a href="coaching.html">1:1 Coaching</a></li>' +
            '<li><a href="guides.html">Guides &amp; Plans</a></li>' +
            '<li><a href="free-meal-plan.html">Free Gifts</a></li>' +
            '<li><a href="about.html">About Kassy</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Connect</h4>' +
          '<ul>' +
            '<li><a href="https://instagram.com/kassyalicee" target="_blank" rel="noopener">Instagram</a></li>' +
            '<li><a href="https://tiktok.com/@kassyalicee" target="_blank" rel="noopener">TikTok</a></li>' +
            '<li><a href="https://www.youtube.com/@Kassyalice" target="_blank" rel="noopener">YouTube</a></li>' +
            '<li><a href="https://pinterest.com/kassyalicee" target="_blank" rel="noopener">Pinterest</a></li>' +
            '<li><a href="mailto:themodelbodyclub@gmail.com">Email us</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="footer-base">' +
      '<small>© ' + year + ' The Model Body Club by Kassy Alicee. All rights reserved.</small>' +
      '<span class="cherries">🍒 Train with intention 🍒</span>' +
      '<small><a href="#" style="color:inherit">Terms</a> · <a href="#" style="color:inherit">Privacy</a></small>' +
    '</div>';

  /* ---- MOUNT ---- */
  var mountTop = document.getElementById('site-header');
  var mountBot = document.getElementById('site-footer');
  if (mountTop) mountTop.replaceWith(header); else document.body.insertBefore(header, document.body.firstChild);
  if (mountBot) mountBot.replaceWith(footer); else document.body.appendChild(footer);

  /* ---- MOBILE NAV ---- */
  var toggle = header.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

/* Generic mock form handler: any <form data-mock-success> flips to its
   sibling .form-success on submit. Replace with real Brevo/Gumroad wiring. */
document.addEventListener('submit', function (e) {
  var form = e.target;
  if (!form.hasAttribute || !form.hasAttribute('data-mock-success')) return;
  e.preventDefault();
  var ok = form.parentElement.querySelector('.form-success');
  if (ok) { ok.classList.add('show'); form.style.display = 'none'; }
});
