// loadContent.js
function loadHeader () {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data
    })
}

function loadFooter () {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data
    })
}
function loadNavbar () {
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('nav').innerHTML = data
    })
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeader()
  loadNavbar()
  loadFooter()
})
