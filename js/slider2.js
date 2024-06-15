let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let slider = document.querySelectorAll('.slider-card')
    document.querySelector('.Slider').appendChild(slider[0])
})

prev.addEventListener('click', function(){
    let slider = document.querySelectorAll('.slider-card')
    document.querySelector('.Slider').prepend(slider[slider.length-1])
})


// Codigo sacado de Copilot, no se bien como funciona todavia


// Obtener el elemento del carrusel
var carrusel = document.querySelector('.carrusel');

// Variables para seguir el punto de inicio y final del swipe
var puntoInicio, puntoFinal;

// Evento para cuando se toca la pantalla
carrusel.addEventListener('touchstart', function(e) {
  puntoInicio = e.touches[0].clientX;
});

// Evento para cuando se mueve el dedo por la pantalla
carrusel.addEventListener('touchmove', function(e) {
  // Prevenir el comportamiento por defecto del navegador
  e.preventDefault();
});

// Evento para cuando se levanta el dedo de la pantalla
carrusel.addEventListener('touchend', function(e) {
  puntoFinal = e.changedTouches[0].clientX;

  // Calcular la diferencia entre el inicio y el final del swipe
  var diferencia = puntoInicio - puntoFinal;

  // Si la diferencia es positiva, se deslizó hacia la izquierda
  if (diferencia > 0) {
    // Mover el carrusel a la siguiente imagen
    let slider = document.querySelectorAll('.slider-card')
    document.querySelector('.Slider').appendChild(slider[0])
  } else {
    // Mover el carrusel a la imagen anterior
    let slider = document.querySelectorAll('.slider-card')
    document.querySelector('.Slider').prepend(slider[slider.length-1])
  }
});

// Función para mover el carrusel
function moverCarrusel(direccion) {
  // Aquí iría tu lógica para cambiar la imagen del carrusel
  console.log('Mover carrusel hacia ' + direccion);
}