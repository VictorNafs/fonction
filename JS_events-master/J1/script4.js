const editButton1 = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
const cardText1 = document.querySelectorAll('.card')[1].querySelector('.card-text');

editButton1.addEventListener('click', function() {
  if (cardText1.style.color === 'green') {
    cardText1.style.color = '';
  } else {
    cardText1.style.color = 'green';
  }
});
