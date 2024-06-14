const fName = document.getElementById("nombre");
const phone = document.getElementById("telefono");
const mail = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
// add event listener on the container form
const submit = document.getElementById("form");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked");

    //cuerpo de correo electronico
    let ebody = `
    <b>Name:</b>  ${fName.value}
    <br><br>
    <b>Phone:</b> ${phone.value}
    <br><br>
    <b>Email:</b> ${mail.value}
    <br><br>
    <b>Message:</b> <br> ${mensaje.value}
    `

    //email code here..
    Email.send({
        SecureToken: "87cda6c3-ff64-434d-9437-977a1596deb8",
        To: 'plopteam@gmail.com',
        From: "edwardq8722@gmail.com",
        Subject: "Energyven " + mail.value,
        Body: ebody
    }).then(
        //alerta bonito
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        });
    form.reset();
})