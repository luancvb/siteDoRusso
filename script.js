function toggleMenu() {
    const menu = document.querySelector('.menu ul');

    const displayMenu = window.getComputedStyle(menu).display;

    const socialIcons = document.querySelector('.social-icons');
    const displayStyle = window.getComputedStyle(socialIcons).display;

    // CONTROLE DO MENU
    if (displayMenu === 'flex') {
        menu.style.display = 'none';
    }

    else {
        menu.style.display = 'flex';
    }
    // Controle dos icones
    if (displayStyle === 'flex') {
        socialIcons.style.display = 'none';
    }

    else {
        socialIcons.style.display = 'flex';
    }

}