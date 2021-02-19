var miTitulos = document.querySelectorAll('h1');
let suma = 6 + 9;
let resta = 6 - 9;
let multi = 6 * 9;
let divide = 6 / 9;
miTitulos[0].textContent = 'Hola Mundo sumando: ' + suma + ' Con Multiplo es: ' + multi;
miTitulos[1].textContent = 'Hola Amauris restamos: ' + resta + ' Con Division es: '  + divide;

var i;
miTitulos.forEach (e =>   e.style.background = "red");

if (suma === 15) {
   alert('Suma es correcta!');
} else {
  alert('Error');
}

document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}