const arrayH = document.querySelectorAll('h1');
let miImage = document.querySelector('img');
miImage.onclick = function() {
 let miSrc = miImage.getAttribute('src');
 if (miSrc === 'imagenes/firefox-icon.png') {
   miImage.setAttribute('src', 'imagenes/firefox2.png');
 }else {
   miImage.setAttribute('src', 'imagenes/firefox-icon.png');
 }
}
arrayH[0].textContent = "Imaneges";
arrayH[1].textContent = "Cambiando";
arrayH.forEach (e => e.style.background = "Red");

let miButton = document.querySelector('button');

function estableceNombreUsuario() {
  let miUsuario = prompt ('Por favor indique su Usuario: ');
  if (!miUsuario) {
    estableceNombreUsuario();
  } else{
    localStorage.setItem('Usuario', miUsuario);
    arrayH[0].textContent = 'JavaScript es genial, ' + miUsuario;
  }
} 

if (!localStorage.getItem('Usuario')){
   estableceNombreUsuario();
}else{
  let almacenado = localStorage.getItem('Usuario');
  arrayH[0].textContent = 'JavaScript es genial, ' + almacenado;   
}

miButton.onclick = function() {
  estableceNombreUsuario();
}

let miAhref = document.querySelector('a');

function obtener_localizacion() {
  navigator.geolocation.getCurrentPosition(coordenadas);
}
function coordenadas(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  alert('Tus coordenadas son: ('+latitud+','+longitud+')');
}

miAhref.onclick = function() {
  obtener_localizacion();
}

colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("h1").forEach(function(h1) {
    h1.style.color = event.target.value;
  });
}
