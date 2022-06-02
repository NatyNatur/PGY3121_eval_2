$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $(".navChange").css("background", "#182D65");
        }
        else {
            $(".navChange").css("background", "transparent");
        }
    })
});

function enviaMensaje() {
    var rut = document.formulario.rut.value;
    var nombre = document.formulario.nombre.value;
    var edad = document.formulario.edad.value;
    var genero = document.formulario.genero.value;
    var email = document.formulario.email.value;
    var telefono = document.formulario.telefono.value;
    var region = document.formulario.region.value;
    var mensaje = document.formulario.mensaje.value;
    var contDatos = document.getElementById('listaDatos');
    $('#listaDatos').empty();

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre válido');
        document.formulario.nombre.focus();
        return false;
    }
    else {
        var nameNode = document.createElement("li");
        var nameTextNode = document.createTextNode("Nombre: " + nombre);
        nameNode.appendChild(nameTextNode);
    }

    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formulario.rut.focus();
        return false;
    }
    else {
        var rutNode = document.createElement("li");
        var rutTextNode = document.createTextNode("Rut: " + rut);
        rutNode.appendChild(rutTextNode);
    }

    if (edad <= 0 || edad === '') {
        alert('Debe ingresar su edad.');
        document.formulario.edad.focus();
        return false;
    }
    else {
        var edadNode = document.createElement("li");
        var edadTextNode = document.createTextNode("Edad: " + edad);
        edadNode.appendChild(edadTextNode);
    }

    if (genero === '') {
        alert('Debe seleccionar un género.');
        document.formulario.genero.focus();
        return false;
    } else {
        var generoNode = document.createElement("li");
        var generoTextNode = document.createTextNode("Género: " + genero);
        generoNode.appendChild(generoTextNode);
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 3) {
        document.formulario.email.focus();
        alert('Debe ingresar un email válido.');
        return false;
    }
    else {
        var emailNode = document.createElement("li");
        var emailTextNode = document.createTextNode("Correo: " + email);
        emailNode.appendChild(emailTextNode);
    }

    if (telefono.length != 9 || telefono.indexOf('+') === 1 || telefono[0] != '9') {
        alert('Debe ingresar un teléfono válido sin +. Recuerde que debe comenzar con 9.')
        document.formulario.telefono.focus();
        return false;
    }
    else {
        var telefonoNode = document.createElement("li");
        var telefonoTextNode = document.createTextNode("Teléfono: " + telefono);
        telefonoNode.appendChild(telefonoTextNode);
    }

    if (region === 'null') {
        alert('Debe seleccionar una región.');
        document.formulario.region.focus();
        return false;
    } else {
        var regionNode = document.createElement("li");
        var regionTextNode = document.createTextNode("Región: " + region);
        regionNode.appendChild(regionTextNode);
    }

    if (mensaje.length < 3) {
        alert('Recuerde dejar su mensaje.');
        document.formulario.mensaje.focus();
        return false;
    }
    else {
        var mensajeNode = document.createElement("li");
        var mensajeTextNode = document.createTextNode("Mensaje: " + mensaje);
        mensajeNode.appendChild(mensajeTextNode);
    }

    contDatos.appendChild(nameNode);
    contDatos.appendChild(rutNode);
    contDatos.appendChild(edadNode);
    contDatos.appendChild(generoNode);
    contDatos.appendChild(emailNode);
    contDatos.appendChild(telefonoNode);
    contDatos.appendChild(mensajeNode);
    $('#modalDatos').modal('show')
}

$('#modalDatos').on('hidden.bs.modal', function (event) {
    limpiarForm();
})

function limpiarForm() {
    document.formulario.reset();
}