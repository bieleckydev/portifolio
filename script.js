document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       TEMA (LIGHT / DARK MODE)
       ========================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    // Verifica a preferência do usuário salva ou a preferência do sistema
    const currentTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Função para atualizar o ícone
    const updateIcon = (theme) => {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    // Aplica o tema inicial
    if (currentTheme) {
        body.classList.add(`${currentTheme}-mode`);
        updateIcon(currentTheme);
    } else {
        // Se não houver tema salvo, usa a preferência do sistema para definir o ícone correto
        updateIcon(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Toggle do Tema
    themeToggleBtn.addEventListener('click', () => {
        let theme;
        
        // Verifica o tema atual baseado nas classes do body
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            theme = 'light';
        } else if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            theme = 'dark';
        } else {
            // Se nenhuma classe estiver presente, assume que o tema atual é a preferência do sistema e inverte
            if (prefersDarkScheme.matches) {
                body.classList.add('light-mode');
                theme = 'light';
            } else {
                body.classList.add('dark-mode');
                theme = 'dark';
            }
        }

        // Atualiza ícone e salva no localStorage
        updateIcon(theme);
        localStorage.setItem('theme', theme);
    });


    /* ==========================================
       HEADER SCROLL EFFECT
       ========================================== */
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================
       MOBILE MENU (HAMBURGER)
       ========================================== */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Fechar o menu ao clicar em um link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    /* ==========================================
       SCROLL REVEAL ANIMATION
       ========================================== */
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Quando o elemento deve aparecer

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // Disparar uma vez no carregamento
    reveal();

    /* ==========================================
       ANO ATUAL NO FOOTER
       ========================================== */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* ==========================================
       EFEITO TYPEWRITER
       ========================================== */
    const roles = ["Estudante de Engenharia de Software", "Desenvolvedor Java", "Entusiasta de Hardware"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenRoles = 2000;

    const typewriterElement = document.querySelector('.typewriter');

    function typeEffect() {
        if (!typewriterElement) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = delayBetweenRoles;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    if (typewriterElement) {
        setTimeout(typeEffect, 1000); // Inicia após 1s
    }

});
