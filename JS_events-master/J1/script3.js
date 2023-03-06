const editButton = document.querySelector('.card .btn-outline-secondary');
const cardText = document.querySelector('.card .card-text');

editButton.addEventListener('click', function() {
  cardText.style.color = 'red';
});
