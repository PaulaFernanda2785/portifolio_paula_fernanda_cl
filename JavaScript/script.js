/*=====JS - HEADER-TRANPARENTE=====*/
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    }
});

// smooth scroll seguro para links internos (nav a[href^="#"])
document.addEventListener('click', function (e) {
    const el = e.target.closest('a[href^="#"]');
    if (!el) return;
    const href = el.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    // usar scrollIntoView com comportamento suave
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // opcional: colocar foco no elemento após rolagem para acessibilidade
    setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
    }, 600);
});

// ...existing code...