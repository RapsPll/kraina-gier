const hamburgerButton = document.querySelector('.hamburgerBox')

const activeMenu = () => {
    const nav = document.querySelector('.header__navigationMobile');
    nav.classList.toggle('header__navigationMobile--active');
    hamburgerButton.classList.toggle('hamburgerBox--active')
}

hamburgerButton.addEventListener('click', activeMenu)