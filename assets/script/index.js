let btnIngresar = document.getElementById("btnIngresar");
let loguin = document.querySelector(".contenedor");
let fondoOscuro = document.querySelector(".fondoOscuro");
let inputs = document.querySelectorAll(".input");
let btnLogin = document.querySelector(".btnLogin");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let btnForgot = document.getElementById("Forgot");

/* let btnCerrar = document.querySelector(".cerrarVentana"); */

//ACCIONES DEL LOGIN
function focusFun() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function blurFun() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach(input => {
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", blurFun);
});


//ACTIVAMOS EL LOGIN POR EL BOTON INGRESAR
const activarLogin = (e) => {
    e.preventDefault();

    setTimeout(() => {
        fondoOscuro.style.display = "grid";
    }, 200);

    setTimeout(() => {
        loguin.style.display = "grid";
    }, 300);
}

function ingresar() {
    if (user.value == "" || pass.value == "") {
        swal.fire({
            title: "Debes llenar todos los campos",
            icon: "error"
        })
    } else {
        swal.fire({
            title: "Bienvenido a VipTravel",
            text: "señor@" + " " + user.value,
            icon: "success"
        })
        loguin.style.display = "none";
        fondoOscuro.style.display = "none";
        user.value = "";
        pass.value = "";
    }
}

function olvidarUser() {
    swal.fire({
        title: "¿Olvidaste tu usuario o contraseña?",
        text: "Ingresa tu email y te enviaremos los datos",
        icon: "question",
        input: "text",
        inputPlaceholder: "Email"
    })

    /*     if(input.value !==""){
            swal.fire({
                title: "Información enviada",
                text: "Por favor revisa tu correo",
                icon: "success"
            })
        } */
}


btnIngresar.addEventListener("click", activarLogin);
btnLogin.addEventListener("click", ingresar);
btnForgot.addEventListener("click", olvidarUser);