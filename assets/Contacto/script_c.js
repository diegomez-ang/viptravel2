// @ts-nocheck
/* // @ts-nocheck
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  }) */

let name = document.getElementById('name')
let lastname = document.getElementById('lastname')
let destiny = document.getElementById('destiny')
let email = document.getElementById('email')
let comentarios = document.getElementById('comentarios')
let nacionality = document.getElementById('nacionality')
let enviar = document.getElementById('enviar')
let birthday = document.getElementById('birthday')
let terminos = document.getElementById('terminos')
let condiciones = document.getElementById('condiciones')


function NameValidate(e){
  /* alert('Nombre') */
  if(name.value == ''|| lastname.value == '' || destiny.value == '' || email.value == '' || nacionality.value == '' || birthday.value == ''|| comentarios.value == ''){
    Swal.fire({
      title: 'Espera!',
      text: "Todos los datos son necesarios",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Intentarlo nuevamente'
    })
  }
  else{
    Swal.fire({
      position: 'center',
      icon:  'success',
      title: 'Gracias! <br> Pronto un asesor te contactara',
      showConfirmButton: false,
      timer: 3000
    })
  }
  e.preventDefault();
}

function Terminos(e){
  if(terminos.checked == false){
    Swal.fire({
      title: 'Espera!',
      text: "Por favor acepta los terminos y condiciones",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Intentarlo nuevamente'
    })    
  }
  else{
    NameValidate(e)
  }
}


enviar.onclick = function(e){
  NameValidate(e)
  Terminos(e)
}



