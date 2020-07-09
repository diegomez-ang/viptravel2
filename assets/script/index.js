let btnLogin = document.getElementById("btnIngresar");
let loguin = document.querySelector(".contenedor");
let fondoOscuro = document.querySelector(".fondoOscuro");
let inputs = document.querySelectorAll(".input");
/* let btnCerrar = document.querySelector(".cerrarVentana"); */

//ACCIONES DEL LOGIN
function focusFun(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function blurFun(){
    let parent=this.parentNode.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}
inputs.forEach(input =>{
    input.addEventListener("focus",focusFun);
    input.addEventListener("blur",blurFun);
});



//ACTIVAMOS EL LOGIN POR EL BOTON INGRESAR
const activarLogin=(e)=>{
    e.preventDefault();
    
    setTimeout(() =>{
        fondoOscuro.style.display="block";
    }, 200);

    setTimeout(()=>{
        loguin.style.display="block";
    }, 300);
}

/* const cerrarLogin=()=>{
    loguin.style.display="none";
    fondoOscuro.style.display="none";
} */


btnLogin.addEventListener("click",activarLogin);
/* btnCerrar.addEventListener("click", cerrarLogin); */