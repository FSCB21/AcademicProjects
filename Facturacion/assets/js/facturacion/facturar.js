document.querySelector('#Boton-NP').addEventListener('click', ValidarDatosP);
document.querySelector('#Boton-F').addEventListener('click', Facturar);
document.querySelector('#Boton-Imprimir').addEventListener('click', Inprimir);

ProductosRegistrados = [

]

function ValidarDatosP(){
    var Correcto = true;
    var Men ="";
    var Datos = [
        Articulo=document.querySelector('#Articulo').value,
        PrecioIva = document.querySelector('#PrecioIva').value,
        Iva = document.querySelector('#Iva').value,
    ]

    if(Datos[0] == null || Datos[0].length == 0 || /^\s+$/.test(Datos[0]) || !isNaN(Datos[0])||Datos[0].length > 30 ) {
        Correcto = false;
        Men = "Articulo";
      }else
   if(Datos[1]== null || Datos[1].length ==0 || isNaN(Datos[1])){
       Correcto = false; 
       Men = "Precio Iva";
   }else
   if(Datos[2]== null || Datos[2].length ==0 || isNaN(Datos[2])){
    Correcto = false;
    Men = "Iva (No se acepta el simbolo %, ni letras)";
   }
    
    if(Correcto==true){
        NuevoProducto();
    }else{
        alert("Datos Con Valores Incorrectos En El Campo "+Men);
    }
}

function NuevoProducto(){
    Articulo=document.querySelector('#Articulo').value;
    PrecioIva = document.querySelector('#PrecioIva').value;
    Iva = document.querySelector('#Iva').value;
    Cantidad = document.querySelector('#Cantidad').value;
    ProductosRegistrados.push({Valor:1,Articulo,PrecioIva,Iva,Cantidad});
    document.getElementById("formu").reset();
    console.log(ProductosRegistrados);
    alert("Producto Agregado Con Exito");

    
    document.querySelector('#productosC').style.display = 'block';
    document.querySelector('#Boton-F').style.display = 'block';
    document.getElementById('productoCarro').innerHTML+='<p>'+Articulo+' Valor(Sin Con Iva): '+ PrecioIva+ ' //Cantidad: ' +Cantidad+'</p>';
}



function Facturar(){

    var TotalConIva;
    var ValorIva =0;
    var Total =0;
    var TotalDelSubtotal=0;
    var TotalDelValorIva=0;
    var TotalDelTotalConIva=0;

    for (i=0;i<ProductosRegistrados.length;i++) {
        Total = parseInt(ProductosRegistrados[i]["PrecioIva"]);
        ValorIva = parseInt(ProductosRegistrados[i]["Iva"]);
        ProductosRegistrados[i]["Subtotal"] = Total/(1+(ValorIva/100));
        ProductosRegistrados[i]["ValorIva"]= Total-ProductosRegistrados[i]["Subtotal"];
        ProductosRegistrados[i]["TotalConIvaCanti"] = Total*ProductosRegistrados[i]["Cantidad"];
        

        TotalDelSubtotal+=parseFloat(ProductosRegistrados[i]["Subtotal"]);
        console.log(TotalDelSubtotal);
        TotalDelValorIva += parseFloat(ProductosRegistrados[i]["ValorIva"]);
        TotalDelTotalConIva += parseFloat(Total);
    }



    var DatosP=RecibirDatos();

    document.getElementById('DatosFac').innerHTML='<p>Nombre '+DatosP[0]+'</p><p>Tipo Documento '+DatosP[1]+'</p><p>Numero Documento '+DatosP[2]+'</p><p>Correo '+DatosP[3]+'</p><hr>';
    
    
    for (i=0;i<ProductosRegistrados.length;i++){
        document.getElementById('ProductosFac').innerHTML+='<p>Articulo: '+ProductosRegistrados[i]["Articulo"]+'</p><p>Precio Unidad Con Iva: '+ProductosRegistrados[i]["PrecioIva"]+'</p><p>Porcentaje Iva: '+ProductosRegistrados[i]["Iva"]+'</p><p>Cantidad: '+ProductosRegistrados[i]["Cantidad"]+'</p><p>Subtotal Sin Iva: '+ProductosRegistrados[i]["Subtotal"].toFixed(0)+'</p><p>Valor Iva: '+ProductosRegistrados[i]["ValorIva"].toFixed(0)+'</p><p>Total Con Iva Incluido: '+ProductosRegistrados[i]["TotalConIvaCanti"]+'</p><hr>';
    }

    document.getElementById('TotalSubTotalFac').innerHTML='<p>Total Costo Sin Iva: '+TotalDelSubtotal.toFixed(0);
    document.getElementById('TotalIvaFac').innerHTML='<p>Total Costo Iva: '+TotalDelValorIva.toFixed(0);
    document.getElementById('TotalConIvaFac').innerHTML='<p>Total Costo General: '+TotalDelTotalConIva.toFixed(0);

    document.querySelector('#container').style.display = 'none';
    document.querySelector('#factura').style.display = 'block';
    document.querySelector('#probar').style.display = 'none';
}



function Inprimir(){
    document.querySelector('#Boton-Imprimir').style.display = 'none';
    document.querySelector('#Boton-NuevaC').style.display = 'none';
    window.print()
    document.querySelector('#Boton-Imprimir').style.display = 'block';
    document.querySelector('#Boton-NuevaC').style.display = 'block';
}