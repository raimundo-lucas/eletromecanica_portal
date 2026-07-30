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

        // Fechar menu ao clicar em qualquer link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Ativação do link de navegação conforme o scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 150)) {
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
// 4. Lógica para expandir/recolher os módulos (UCs)
    const toggleBtns = document.querySelectorAll('.btn-toggle-uc');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);

            // Alterna a classe ativa do botão e do container
            btn.classList.toggle('active');
            targetContainer.classList.toggle('active');

            // Atualiza o texto do botão para melhor visualização
            const btnText = btn.querySelector('.btn-text');
            if (btn.classList.contains('active')) {
                btnText.textContent = 'Ocultar Unidades Curriculares';
            } else {
                btnText.textContent = 'Ver Unidades Curriculares';
            }
        });
    });
