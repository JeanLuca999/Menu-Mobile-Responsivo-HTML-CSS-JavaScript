const botaoMenuMobile = document.getElementsByClassName('botao-menu-mobile')[0]
const menu = document.getElementsByClassName('menu')[0]
const barrasMenuMobile = document.querySelectorAll('.barras')
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
        body.style.overflow = ''
        clicouNoMenu = false
    }
})