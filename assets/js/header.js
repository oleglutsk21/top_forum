window.onload = function() {
    let menuButton = document.querySelector('.header__nav-button');
    let menu = document.querySelector('.header__nav-menu');
    let menuPosition = document.querySelector('.header-top').offsetHeight + "px";
    let body = document.querySelector('body');
    menuButton.addEventListener('click', function() {
        if (menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
            body.style.setProperty('overflow', 'auto');
        } else {
            menu.classList.add('show-menu');
            menu.style.setProperty('top', menuPosition);
            body.style.setProperty('overflow', 'hidden');
        }
    });
    window.addEventListener('resize', function(event) {
    }, true);
    console.log(menuPosition);
}
