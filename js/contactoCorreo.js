const form = document.querySelector("form");

const fullName = document.getElementById("name");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const mess = document.getElementById("mensaje");




function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> telefono: ${telefono.value}
    <br> mensaje: ${mess.value}`



    email.send({
            Host: "smtp.elasticemail.com",
            Username: "ecommerceluzcva@gmail.com",
            Password: "9530DB67FE0627BE3772F792ECD2A795A285",
            To: 'ecommerceluzcva@gmail.com',
            From: "ecommerceluzcva@gmail.com",
            Subject: fullName.value,
            Body: bodyMessage
        })
        .then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );

}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector(".input.item.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");


        if (email.value = "") {
            errorTextEmail.innerText = "Enter a valid email address"
        } else {
            errorTextEmail.innerText = "Email address can't be blank"
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
        !telefono.classList.contains("error") &&
        !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;

    }



});