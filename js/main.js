const hamburgerButton = document.querySelector('.hamburger')
const linkWhyUs = document.querySelector('.navigationMobile__link--whyUs')
const linksMobile = document.querySelectorAll ('.navigationMobile__link')
const nav = document.querySelector('.navigation__mobile');
const activeMenu = () => {
    nav.classList.toggle('navigation__mobile--active');
    hamburgerButton.classList.toggle('hamburger--active')
    linkWhyUs.focus()
}

hamburgerButton.addEventListener('click', activeMenu)

linksMobile.forEach((linkMobile) => {
    linkMobile.addEventListener('click', () => {
        hamburgerButton.classList.remove('hamburger--active')
        nav.classList.remove('navigation__mobile--active');
    })
})