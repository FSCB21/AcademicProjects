document.querySelector('#btn-Lgn').addEventListener('click', iniciarSesion);
sessionStorage.setItem('intentos', 0);
function iniciarSesion(){

    var contador =JSON.parse(sessionStorage.getItem('intentos'));

    var Usuario = "";
    var Contra = "";
    var entrar = false;

    Usuario = document.querySelector('#Usuario').value;
    Contra = document.querySelector('#Contra').value;

    entrar = validarCredenciales(Usuario,Contra);
 
    if (entrar == true){
        window.location.href = 'views/facturacion.html';
    }else {
        contador ++;


        sessionStorage.setItem('intentos', contador);

        document.getElementById('cont1').innerHTML='<p style="color: #fff;">Error!! intentos realizados </p>' + sessionStorage.getItem('intentos');
        if (contador==3){
            alert("Muchos Intentos Fallidos. \nSe va a realizar una recarga del sistema");
            location.reload();
        }
    }
}

