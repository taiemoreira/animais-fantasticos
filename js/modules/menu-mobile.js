import outsideclick from './outsideclick.js';

export default function initMenuMobile() {
    const list = document.querySelector('[data-menu="list"]')
    const button = document.querySelector('[data-menu="button"]')
    const eventos = ['click', 'touchstart']

    if (button) {
        eventos.forEach((evento) => {
            button.addEventListener(evento, openMenu)
        })
    }

    function openMenu(event) {
        event.preventDefault()
        list.classList.add('active')
        button.classList.add('active')

        outsideclick(list, eventos, () => {
            list.classList.remove('active')
            button.classList.remove('active')
        })
    }
}