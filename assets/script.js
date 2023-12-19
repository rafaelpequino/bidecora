function scrollToSection(targetId) {
    const headerHeight = 90;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const offset = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        const correspondingNavLink = document.querySelector(`nav a[href="#${targetId}"]`);
        if (correspondingNavLink) {
            correspondingNavLink.classList.add("active");
        }
    }
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            scrollToSection(targetId);
        }
    });
});


// Adicionando a rolagem suave para os links adicionais
const ctaLinks = document.querySelectorAll(".cta, .cta-au");

ctaLinks.forEach((ctaLink) => {
    ctaLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        scrollToSection(targetId);
    });
});

// SIDEBAR RESPONSIVO
const sidebar = document.getElementById('nav');
const btnOpenSidebar = document.getElementById('open-close-sidebar');

function bloquearRolagem() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.body.style.overflow = "hidden";
}

function liberarRolagem() {
    document.body.style.overflow = "auto";
}

function fecharSidebar() {
    liberarRolagem();
    sidebar.setAttribute('data-sidebarStatus', 'close');
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-close');
    btnOpenSidebar.classList.remove('btn-sidebar-open');
}

btnOpenSidebar.addEventListener('click', () => {
    if (sidebar.getAttribute('data-sidebarStatus') === 'close') {
        bloquearRolagem();
        sidebar.setAttribute('data-sidebarStatus', 'open');
    } else {
        liberarRolagem();
        sidebar.setAttribute('data-sidebarStatus', 'close');
    }

    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-close');
    btnOpenSidebar.classList.toggle('btn-sidebar-open');
});

// Adiciona um ouvinte de evento para cada link no nav
const links = document.querySelectorAll('#nav a');
links.forEach(link => {
    link.addEventListener('click', fecharSidebar);
});