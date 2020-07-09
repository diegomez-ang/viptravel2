let btnLogin = document.getElementById("btnIngresar");
let loguin = document.querySelector(".loguin");
let fondoOscuro = document.querySelector(".fondoOscuro");
let btnCerrar = document.querySelector(".cerrarVentana");

const activarLogin=(e)=>{
    e.preventDefault();
    
    setTimeout(() =>{
        fondoOscuro.style.display="block";
    }, 200);

    setTimeout(()=>{
        loguin.style.display="block";
    }, 300);
}

const cerrarLogin=()=>{
    loguin.style.display="none";
    fondoOscuro.style.display="none";
}


btnLogin.addEventListener("click",activarLogin);
btnCerrar.addEventListener("click", cerrarLogin);