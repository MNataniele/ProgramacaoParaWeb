const span = document.querySelector('span')
const menu = document.querySelector('.menu')
/*const menul = document.querySelector('.menul')
const menur = document.querySelector('.menur')
const menu = document.querySelector('.menu')
const fundomenu = document.querySelector('.fundomenu')*/


span.addEventListener('click', function() {
  if(menu.style.display !== 'flex') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = ''
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
