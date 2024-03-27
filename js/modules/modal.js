export default function initModal() {
    const abrir = document.querySelector('[data-modal="abrir"]')
    const fechar = document.querySelector('[data-modal="fechar"]')
    const container = document.querySelector('[data-modal="container"]')

    if (abrir && fechar && container) {
        abrir.addEventListener('click', toggleModal)
        fechar.addEventListener('click', toggleModal)
        container.addEventListener('click', clickFora)
    }

    function toggleModal(event) {
        event.preventDefault()
        container.classList.toggle('ativo')
    }

    function clickFora(event) {
        if (event.target === this) {
            toggleModal(event)
        }
    }
}