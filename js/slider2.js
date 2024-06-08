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