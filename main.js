 // Força o navegador a sempre carregar no topo da página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
document.addEventListener('DOMContentLoaded', () => {
      
    // 1. Atualização Dinâmica do Ano no Rodapé
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Toggle do Menu Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu mobile ao clicar em qualquer link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Lógica da Sanfona (Expansão dos Módulos para mostrar as UCs)
    const toggleBtns = document.querySelectorAll('.btn-toggle-uc');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);

            if (targetContainer) {
                // Alterna exibição
                btn.classList.toggle('active');
                targetContainer.classList.toggle('active');

                // Atualiza o texto do botão
                const btnText = btn.querySelector('.btn-text');
                if (btnText) {
                    if (btn.classList.contains('active')) {
                        btnText.textContent = 'Ocultar Unidades Curriculares';
                    } else {
                        btnText.textContent = 'Ver Unidades Curriculares';
                    }
                }
            }
        });
    });

    // 4. Destaque Automático no Menu conforme a rolagem (Scrollspy)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

}); 

