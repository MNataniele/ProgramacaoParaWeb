const iconemenu = document.querySelector('.iconemenu')
const menu = document.querySelector('.menu')
const menul = document.querySelector('.menul')
const menulogo = document.querySelector('.menulogo')
/*const logo = document.querySelector('.logo')
const fundomenu = document.querySelector('.fundomenu')*/
  
  
/*span.addEventListener('click', function() {*/
  iconemenu.addEventListener('click', function() {
  if(menu.style.display !== 'flex') {
    menu.style.display = 'flex'
    menul.style.display = 'flex'
    menulogo.style.display = 'flex'
  } else {
    menu.style.display = ''
    menul.style.display = ''
    menulogo.style.display = ''
  }
})
    /*if (menupc.style.display !== 'flex') {
        menupc.style.display = 'flex'
        menul.style.display = 'flex'
        menur.style.display = 'flex'
        menu.style.height = '230px'
        fundomenu.style.display = 'block'
    } else {
        menupc.style.display = ''
        menul.style.display = ''
        menur.style.display = ''
        menu.style.height = ''
        fundomenu.style.display = ''
    }
})*/
