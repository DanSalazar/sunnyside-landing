const navButton = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const headerArrow = document.querySelector('.header-arrow')

navButton.addEventListener('click', function () {
  navList.classList.toggle('show')
  navButton.classList.toggle('open')
  headerArrow.classList.toggle('-hidden')
  if (navButton.classList.contains('open')) navButton.setAttribute('aria-label', 'Close')
  else navButton.setAttribute('aria-label', 'Open')
})