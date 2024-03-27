//Colocar conteúdo do json na página.

import initAnimaNumeros from './anima-numeros.js'

export default function initFetchAnimais() {
    function createAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
        return div;
    }

    async function fetchAnimais(url) {
        try {
            const response = await fetch(url)
            const json = await response.json()
            const numGrid = document.querySelector('.numeros-grid')
            
            json.forEach((animal) => {
                const divAnimal = createAnimal(animal)
                numGrid.appendChild(divAnimal)
            })
            initAnimaNumeros()
        } catch (erro) {
            console.log(erro)
        }
    }
    fetchAnimais('./animaisapi.json')
}