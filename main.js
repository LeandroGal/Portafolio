/* MENU SHOw*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu') 
/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Subrayado en la seccion que estoy
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remover menu al elegir una seccion
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL MENU */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__social',{delay: 400})
sr.reveal('.home__social-icon',{intervale: 200})

/* SCROLL ABOUT */
sr.reveal('.section-title',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* SCROLL SKILLS */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 400})
sr.reveal('.skills__data',{intervale: 200})

/* SCROLL WORK */
sr.reveal('.work__img',{intervale: 200})

/* SCROLL CONTACT */

sr.reveal('.contact__input',{intervale: 200})