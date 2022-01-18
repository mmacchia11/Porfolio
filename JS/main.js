/*==================== MENU MOSTRAR Y OCULTAR====================*/
const navMenu =  document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')  
      navClose = document.getElementById('nav-close')  
/*===== MENU MOSTRAR =====*/
if(navToggle){
        navToggle.addEventListener('click',()=>{
                navMenu.classList.add('show-menu')
        })
}


/*===== MENU OCUALTAR =====*/
if(navClose){
     navClose.addEventListener('click',()=>{
             navMenu.classList.remove('show-menu')
     })   
}


/*==================== SACAR MENU CEL ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // si hacen click en cualquir item, se remueve show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACORDION SKILLS ====================*/


/*==================== CAULIDADES  ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO   ====================*/


/*==================== TESRIMONIOS ====================*/


/*==================== SECCION SCROLL  ACTIVA LINK ====================*/


/*==================== CAMBIAR COLOR FONDO HEADER ====================*/ 


/*==================== MOSTRAR SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 