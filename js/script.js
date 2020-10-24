const botaoMenuMobile = document.getElementsByClassName('botao-menu-mobile')[0]
const menu = document.getElementsByClassName('menu')[0]
const barrasMenuMobile = document.querySelectorAll('.barras')
const body = document.getElementsByTagName('body')[0]
var clicouNoMenu = false

botaoMenuMobile.addEventListener('click', () => {
    if(clicouNoMenu == false){
        menu.style.transform = 'translateX(-0%)'
        barrasMenuMobile.forEach((barra) => {
            barra.style.backgroundColor = 'white'
        })
        botaoMenuMobile.style.backgroundColor = 'rgb(80, 79, 79)'
        body.style.overflow = 'hidden'
        clicouNoMenu = true

    } else if(clicouNoMenu == true){
        menu.style.transform = 'translateX(-100%)'
        barrasMenuMobile.forEach((barra) => {
            barra.style.backgroundColor = 'black'
        })
        botaoMenuMobile.style.backgroundColor = 'white'
        body.style.overflow = ''
        clicouNoMenu = false
    }
})