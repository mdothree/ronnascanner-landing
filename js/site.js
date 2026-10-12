// ronnascanner.com: mobile nav toggle (moved out of an inline <script> so the CSP can stay script-src 'self')
(function () {
    var nav = document.querySelector('nav');
    var btn = nav && nav.querySelector('.nav-toggle');
    if (!btn) return;
    function setOpen(open) {
        nav.classList.toggle('nav-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        btn.innerHTML = open ? '&times;' : '&#9776;';
    }
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('nav-open')); });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
