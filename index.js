const navButton = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const headerArrow = document.querySelector('.header-arrow')
const scrollButton = document.querySelector('.button-up')

navButton.addEventListener('click', function () {
  navList.classList.toggle('-show')
  navButton.classList.toggle('open')
  headerArrow.classList.toggle('-disappear')
  if (navButton.classList.contains('open')) navButton.setAttribute('aria-label', 'Close')
  else navButton.setAttribute('aria-label', 'Open')
})

window.addEventListener('scroll', function () {
  if (window.scrollY < 20) {
    scrollButton.classList.remove('-show')
    scrollButton.classList.add('-hidden')
  }

  if (window.scrollY > 100) {
    scrollButton.classList.contains('-hidden') && scrollButton.classList.remove('-hidden')
    scrollButton.classList.add('-show')
  }
})

scrollButton.addEventListener('click', function () {
  window.scrollTo(0, 0)
})