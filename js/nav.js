hamburguer = document.querySelector('.hamburguer');
prueba = window.getComputedStyle(hamburguer);

if(prueba.getPropertyValue('display') === 'block'){
    hamburguer = document.querySelector(".hamburguer");
    hamburguer.onclick = function(){
        navBar = document.querySelector(".Nav-btns-cont");
        navBar.classList.toggle("active");
        console.log('se le di click a hamburguesa');
    }

    buttons = document.querySelectorAll(".Nav-btns");
    buttons.forEach(buttons => {
        buttons.onclick = function(){
        navBar = document.querySelector(".Nav-btns-cont");
            navBar.classList.toggle("active");
            console.log('se le di click a un enlace');
        }
    });
}

