//Frase que percorre o cursor no mapa.

export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', mouseOver)
    })

    function mouseOver() {
        const tooltip = criarBox(this)

        mouseMove.tooltip = tooltip;
        this.addEventListener('mousemove', mouseMove)

        mouseLeave.tooltip = tooltip;
        mouseLeave.element = this;
        this.addEventListener('mouseleave', mouseLeave)
    }

    function criarBox(element) {
        const box = document.createElement('div')
        const text = element.getAttribute('aria-label')

        box.classList.add('tooltip')
        box.innerText = text;
        document.body.appendChild(box)
        return box;
    }

    const mouseMove = {
        handleEvent(event) {
            this.tooltip.style.top = event.pageY + 20 + 'px';
            this.tooltip.style.left = event.pageX + 20 + 'px';
        }
    }

    const mouseLeave = {
        handleEvent() {
            this.tooltip.remove()
            this.tooltip.removeEventListener('mousemove', mouseMove)
            this.tooltip.removeEventListener('mouseleave', mouseLeave)
        }
    }
}