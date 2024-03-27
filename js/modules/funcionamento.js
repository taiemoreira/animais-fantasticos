//Funciona de seg à sex. Muda cor.

export default function initFuncionamento() {
    const f = document.querySelector('[data-semana]')
    const dias = f.dataset.semana.split(',').map(Number)
    const horario = f.dataset.horario.split(',').map(Number)

    const diaNow = new Date().getDay()
    const horaNow = new Date().getHours()

    const semanaAberto = dias.indexOf(diaNow) !== -1
    const horarioAberto = (horaNow >= horario[0] && horaNow < horario[1])

    if (semanaAberto && horarioAberto) {
        f.classList.add('aberto')
    }
}