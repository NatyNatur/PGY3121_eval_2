$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".navChange").css("background" , "#182D65");
        }
  
        else{
            $(".navChange").css("background" , "transparent");  	
        }
    })
  });

  function enviaMensaje() {
    var rut = document.formulario.rut.value;
    var nombre = document.formulario.nombre.value;
    var edad = document.formulario.edad.value;
    var genero = document.formulario.genero.value;
    var email = document.formulario.email.value;
    var telefono = document.formulario.telefono;
    var region = document.formulario.region;
    var mensaje = document.formulario.mensaje;
    var contDatos = document.getElementById('datos');


    if (rut.length < 9 || rut.length > 10) {
        alert('Debe ingresar un rut válido.')
        document.formulario.rut.focus();
        return false;
    } 
    else {
        var rutNode = document.createElement("p");
        var rutTextNode = document.createTextNode("Rut ingresado es: " + rut);
        rutNode.appendChild(rutTextNode);
    }

    if (nombre.length < 2) {
        alert('Debe ingresar un nombre válido');
        document.formulario.nombre.focus();
        return false;
    } 
    else {
        var nameNode = document.createElement("p");
        var nameTextNode = document.createTextNode("Nombre ingresado es: " + nombre);
        nameNode.appendChild(nameTextNode);
    }

    if (edad <= 0 || edad === '') {
        alert('Debe ser mayor a 18 años y menor de 65 años.');
        document.formulario.edad.focus();
        return false;
    } 
    else {
        var edadNode = document.createElement("p");
        var edadTextNode = document.createTextNode("Edad ingresado es: " + edad);
        edadNode.appendChild(edadTextNode);
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        document.formulario.email.focus();
        alert('Debe ingresar un email válido.')
    } 
    else {
        var emailNode = document.createElement("p");
        var emailTextNode = document.createTextNode("Correo ingresado es: " + email);
        emailNode.appendChild(emailTextNode);
    }

    contDatos.appendChild(rutNode);
    contDatos.appendChild(nameNode);
    contDatos.appendChild(edadNode);
    contDatos.appendChild(emailNode);
}

function limpiarForm() {
  document.formulario.reset();
}