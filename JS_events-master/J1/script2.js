const button = document.querySelector('.navbar-toggler');
const navbarHeader = document.querySelector('#navbarHeader');

button.addEventListener('click', function() {
  navbarHeader.classList.toggle('collapse');
});
