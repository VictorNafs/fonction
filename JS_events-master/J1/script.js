const footer = document.querySelector('footer')

let counter = 0;
footer.addEventListener('click', function() {
  console.log('clique');
  console.log(`Nombre de clics : ${++counter}`);
});
