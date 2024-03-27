//FAQ text.

export default function initAccordion() {
    const text = document.querySelectorAll('[data-anime="scroll"] dt')

    if (text.length) {
        text[0].classList.add('ativo')
        text[0].nextElementSibling.classList.add('ativo')

        text.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }
}