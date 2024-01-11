function MostrarDatos() {
    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('nom').value;
    var apellidoPaterno = document.getElementById('apep').value;
    var apellidoMaterno = document.getElementById('apem').value;
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;
    var motivo = document.getElementById('motivo').value;


    var mensaje =
        "Rut: " + rut + "\n" +
        "Nombre: " + nombre + "\n" +
        "Apellido Paterno: " + apellidoPaterno + "\n" +
        "Apellido Materno: " + apellidoMaterno + "\n" +
        "Edad: " + edad + "\n" +
        "Género: " + genero + "\n" +
        "Motivo de Postulación: " + motivo + "\n";

    document.getElementById('carta').value=mensaje
}
