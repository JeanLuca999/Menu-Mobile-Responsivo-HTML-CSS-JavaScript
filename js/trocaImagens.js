const proximo = document.getElementsByTagName('button')[0]
const anterior = document.getElementsByTagName('button')[1]

const foto = document.getElementsByTagName('img')[0]

let listaDeFotos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg']
let i = 0
proximo.addEventListener('click', () => {
    foto.setAttribute('src', `images/${listaDeFotos[i++]}`)
    if(i > listaDeFotos.length-1){
        i = 0
    }
})

anterior.addEventListener('click', () => {
    foto.setAttribute('src', `images/${listaDeFotos[i--]}`)
    if(i < 0){
        i = listaDeFotos.length-1
    }
})