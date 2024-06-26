/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  /* Valida se existe as variaveis */
  if (toggle && nav) {
    /* Aqui adiciono a class show-menu na div com a class nav__menu */
    toggle.addEventListener('click', () => {
    /* Adicina a class show-menu na div que tem o id nav-menu */
      nav.classList.toggle('show-menu')
    })
  }
}
showMneu('nav-toggle', 'nav')


/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  if(linkColor){
    linkColor.forEach(L => L.classList.remove('active-link'))
    this.classList.add('active-link')
  }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))


/*==================== MUDAR A COR DO HEADER ====================*/
function scrollHeader() {
  const scrollHeader = document.getElementById('header')

  if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

let time = 5000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img")
  max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected")

  currentImageIndex++

  if(currentImageIndex >= max)

  currentImageIndex = 0

  images[currentImageIndex].classList.add("selected")
}

function start() {
  setInterval(() => {
    nextImage()
  }, time)
}

window.addEventListener("load", start)