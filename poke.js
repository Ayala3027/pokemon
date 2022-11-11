const jUno = document.getElementById('jUno');
const jDos = document.getElementById('jDos');

const nombres = ["Bulbasaur", "Ivysaur", "Venusaur", "Carmander"];


jUno.addEventListener('click', function() {
  const juadorUno = document.getElementById('jugadorUno');
  const card = document.createElement('section');
  const pokemon = document.createElement('img');
  const nombre = document.createElement('p');
  const numeroRandom = Math.floor(Math.random() * (152 - 1) + 1);
  console.log(numeroRandom);
  card.classList.add('card');
  pokemon.classList.add('pokemon');
  nombre.textContent = nombres[numeroRandom];
  pokemon.src = `./img/${numeroRandom}.png`;
  card.append(pokemon, nombre);
  juadorUno.append(card);
});

jDos.addEventListener('click', function() {
  const jugadorDos = document.getElementById('jugadorDos');
  const card = document.createElement('section');
  const pokemon = document.createElement('img');
  const nombre = document.createElement('p');
  const numeroRandom = Math.floor(Math.random() * (3 - 1) + 1);
  console.log(numeroRandom);
  card.classList.add('card');
  pokemon.classList.add('pokemon');
  nombre.textContent = nombres[numeroRandom];
  pokemon.src = `./img/${numeroRandom}.png`;
  card.append(pokemon, nombre)
  jugadorDos.append(card);
});

const contenedor = document.createElement("section");
