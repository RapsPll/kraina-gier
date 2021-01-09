const hamburgerButton = document.querySelector('.hamburgerBox')

const activeMenu = () => {
    const nav = document.querySelector('.header__navigation');
    nav.classList.toggle('header__navigation--active');
    hamburgerButton.classList.toggle('hamburgerBox--active')
}

hamburgerButton.addEventListener('click', activeMenu)