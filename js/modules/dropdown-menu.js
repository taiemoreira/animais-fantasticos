//O menu/navegação em si.

import outsideClick from "./outsideclick.js"

export default function initDropdownMenu() {
    const dropdown = document.querySelectorAll('[data-dropdown]')

    dropdown.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, click)
        })
    })

    function click(event) {
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        })
    }
}