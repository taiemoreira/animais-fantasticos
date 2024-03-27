//Imagens com scroll e texto ao clicar.

export default function initTabNav() {
    const img = document.querySelectorAll('[data-tab="menu"] li')
    const text = document.querySelectorAll('[data-tab="content"] section')

    if (img.length && text.length) {
        text[0].classList.add('ativo')

        img.forEach((item, index) => {
            item.addEventListener('click', function() {
                activeTab(index)
            })
        })
    }

    function activeTab(index) {
        text.forEach((section) => {
            section.classList.remove('ativo')
        })

        const direcao = text[index].dataset.anime;
        text[index].classList.add('ativo', direcao)
    }
}