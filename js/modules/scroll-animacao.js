export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowMetade = window.innerHeight * 0.6;

    if (sections.length) {
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSection = (sectionTop - windowMetade) < 0;

            if (isSection) {
                section.classList.add('ativo')
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo')
            }
        })
    }
}