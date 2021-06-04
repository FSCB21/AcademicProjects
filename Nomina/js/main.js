let Transporte = 102854;
let SalMin = 877802;

document.querySelector('#Boton-Imprimir').addEventListener('click', Inprimir);

const formatterPeso = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })

function GenerarCampo() {

    let form = document.forms["formDatos"]
    let Datos = new FormData(form);
    let InfoTabla = document.getElementById("Tabla")
    let newRow = InfoTabla.insertRow(-1);

    let newCell = newRow.insertCell(0);
    newCell.textContent = Datos.get("Name");

    newCell = newRow.insertCell(1);
    newCell.textContent = Datos.get("TipD");

    newCell = newRow.insertCell(2);
    newCell.textContent = Datos.get("Document");

    newCell = newRow.insertCell(3);
    newCell.textContent = formatterPeso.format(Datos.get("salary"));

    newCell = newRow.insertCell(4);
    newCell.textContent = Datos.get("Days");

    newCell = newRow.insertCell(5);
    newCell.textContent = formatterPeso.format(Sueldo_Dias());

    newCell = newRow.insertCell(6);
    newCell.textContent = formatterPeso.format(Aux_Transporte());

    newCell = newRow.insertCell(7);
    newCell.textContent = formatterPeso.format(Total_Devengado());

    newCell = newRow.insertCell(8);
    newCell.textContent = formatterPeso.format(Salud());

    newCell = newRow.insertCell(9);
    newCell.textContent = formatterPeso.format(Pension());

    newCell = newRow.insertCell(10);
    newCell.textContent = formatterPeso.format(Total_Deducido());

    newCell = newRow.insertCell(11);
    newCell.textContent = formatterPeso.format(Neto());

    document.getElementById("formDatos").reset();
}

function Sueldo_Dias() {
    let form = document.forms["formDatos"];
    let Datos = new FormData(form);
    let valorRetorno = ((Datos.get("salary")) / 30) * (Datos.get("Days"));
    return valorRetorno;
}

function Aux_Transporte() {
    let form = document.forms["formDatos"];
    let Datos = new FormData(form);
    var valorRetorno = 0;

    if ((Datos.get("salary")) <= SalMin * 2) {
        var valorRetorno = (Transporte / 30 * ((Datos.get("Days"))));
    }

    return valorRetorno;
}

function Total_Devengado() {
    return Sueldo_Dias() + Aux_Transporte();
}

function Salud() {
    let form = document.forms["formDatos"];
    let Datos = new FormData(form);
    let valorRetorno = (Datos.get("salary") * 0.04);
    return valorRetorno;
}

function Pension() {
    let form = document.forms["formDatos"];
    let Datos = new FormData(form);
    let valorRetorno = (Datos.get("salary") * 0.04);
    return valorRetorno;
}

function Total_Deducido() {
    return Salud() + Pension();
}

function Neto() {
    return Total_Devengado() - Total_Deducido();
}

function Inprimir() {
    document.querySelector('#Boton-Imprimir').style.display = 'none';
    document.querySelector('#formularioConten').style.display = 'none';
    window.print()
    document.querySelector('#Boton-Imprimir').style.display = 'block';
    document.querySelector('#formularioConten').style.display = 'block';
}
