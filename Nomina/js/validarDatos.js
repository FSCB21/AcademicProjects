
function RecibirDatos() {
    let form = document.forms["formDatos"];
    var Datos = [
        Nombre = form.Name.value,
        TipoDoc = form.TipD.value,
        Documento = form.Document.value,
        Sueldo = form.salary.value,
        Dias = form.Days.value

    ]
    return Datos;
}

function ObtenerDatos() {
    var Correcto = true;
    var Men = "";

    var Datos = RecibirDatos();

    if (Datos[0] == null || Datos[0].length == 0 || /^\s+$/.test(Datos[0]) || !isNaN(Datos[0]) || Datos[0].length > 50 || Datos[0].length < 5) {
        Correcto = false;
        Men = "Nombre";
    } else if (Datos[1] == null || Datos[1] == 0) {
        Correcto = false;
        Men = "Tipo Doc";
    } else if (Datos[2] == null || Datos[2].length == 0 || isNaN(Datos[2]) || Datos[2].length > 15 || Datos[2].length < 10) {
        Correcto = false;
        Men = "Documento";
    } else if (Datos[3] == null || Datos[3].length == 0 || isNaN(Datos[3])) {
        Correcto = false;
        Men = "Sueldo";
    } else if (Datos[4] == null || Datos[4].length == 0 || isNaN(Datos[4]) || Datos[4] > 31) {
        Correcto = false;
        Men = "Dias Trabajados";
    }

    if (Correcto == true) {
        GenerarCampo();
    } else {
        alert("Datos Con Valores Incorrectos En El Campo " + Men);
    }
}