/*=====ANO DO RODAPÉ=====*/
function setFooterYear() {
    const year = new Date().getFullYear();

    // tenta encontrar elementos óbvios onde o ano pode estar
    const target = document.querySelector('#iano, #ano, [data-year]');

    if (target) {
        target.textContent = year;
        return;
    }

    // fallback: insere/atualiza uma <span class="footer-year"> dentro do <footer> <p>
    const footerP = document.querySelector('footer p');
    if (!footerP) return;
    let span = footerP.querySelector('.footer-year');
    if (!span) {
        span = document.createElement('span');
        span.className = 'footer-year';
        // adiciona um separador visual caso já exista texto
        if (footerP.textContent.trim()) footerP.appendChild(document.createTextNode(' '));
        footerP.appendChild(span);
    }
    span.textContent = year;
}

// executa após o carregamento do DOM
document.addEventListener('DOMContentLoaded', setFooterYear);




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