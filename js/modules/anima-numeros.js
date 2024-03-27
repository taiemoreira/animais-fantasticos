export default function initAnimaNumeros() {
    const numeros = document.querySelector('.numeros')
    const observer = new MutationObserver(mutation)

    observer.observe(numeros, {
        attributes: true,
    })

    function mutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect()
            animaNumeros()
        }
    }

    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]')

        numeros.forEach((n) => {
            const total = n.innerText;
            const incremento = Math.floor(total / 100)

            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                n.innerText = start;

                if (start > total) {
                    n.innerText = total;
                    clearInterval(timer)
                }
            }, 50 * Math.random())
        })
    }
}