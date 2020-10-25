//funções do menu mobile
const botaoMenuMobile = document.getElementsByClassName('botao-menu-mobile')[0]
const menu = document.getElementsByClassName('menu')[0]
const body = document.getElementsByTagName('body')[0]
var clicouNoMenu = false

botaoMenuMobile.addEventListener('click', () => {
    if(clicouNoMenu == false){
        menu.style.transform = 'translateX(-0%)'
        botaoMenuMobile.style.backgroundColor = 'rgb(252, 71, 45)'
        body.style.overflow = 'hidden'
        clicouNoMenu = true

    } else if(clicouNoMenu == true){
        menu.style.transform = 'translateX(-100%)'
        botaoMenuMobile.style.backgroundColor = 'rgb(83, 125, 163)'
        body.style.overflow = 'auto'
        clicouNoMenu = false
    }
})

//funções para trocar imagem
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