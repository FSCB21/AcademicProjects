document.querySelector('#Boton-Datos').addEventListener('click', ComprobarDatos);

function RecibirDatos(){
    var Datos = [
        Nombre=document.querySelector('#Nombre').value,
        TipoDoc = document.querySelector('#TipoDoc').value,
        Documento = document.querySelector('#Documento').value,
        Correo = document.querySelector('#Correo').value
    ]
    console.log(Datos);
    return Datos;
}

function ComprobarDatos(){
    var Correcto = true;
    var Men ="";
   
    var Datos =RecibirDatos();

    if(Datos[0] == null || Datos[0].length == 0 || /^\s+$/.test(Datos[0]) || !isNaN(Datos[0])||Datos[0].length > 50 ) {
        Correcto = false;
        Men = "Nombre";
      }else
   if(Datos[1]== null || Datos[1]==0){
       Correcto = false; 
       Men = "Tipo Doc";
   }else
   if(Datos[2] == null || Datos[2].length == 0 || isNaN(Datos[2])|| Datos[2].length > 20){
    Correcto = false;
    Men = "Documento";
   }else
   if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\w.\w+([-.]\w+)/.test(Datos[3])) ) {
    Correcto = false;
    Men = "Correo";
    }
    
    if(Correcto==true){
        document.querySelector('#formF').style.display = 'none';
        document.querySelector('#probar').style.display = 'block';
    }else{
        alert("Datos Con Valores Incorrectos En El Campo "+Men);
        window.location.reload();
    }
}