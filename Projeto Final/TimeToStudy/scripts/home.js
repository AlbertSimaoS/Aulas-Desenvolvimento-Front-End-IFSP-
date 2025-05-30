const navItems = document.querySelectorAll('.nav-list li a');
const highlightBar = document.querySelector('.linha-animada');
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

// Atualiza a barra de destaque no hover
navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const itemPosition = item.getBoundingClientRect();
        const navPosition = document.querySelector('nav').getBoundingClientRect();

        highlightBar.style.left = `${itemPosition.left - navPosition.left}px`;
        highlightBar.style.width = `${item.offsetWidth}px`;
    });

    // Fecha o menu ao clicar em um item
    item.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Alterna o menu mobile
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Adiciona a animação de scroll para o cabeçalho
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
