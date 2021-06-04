function listadoDeUsuarios(){
    var listaUsu = JSON.parse(localStorage.getItem('listaUsu'));

    if(listaUsu==null){
        listaUsu =
        [
            ['Fredd','12345'],
            ['teffa','Neira2004'],
            ['Kiwin','Kewin21'],
            ['Andreina','321321']
        ]
    }
    return listaUsu;
}

function validarCredenciales(Usuario,Contra){
    var listaUsu = listadoDeUsuarios();
    var entrar = false;

    for (var i = 0 ; i < listaUsu.length; i++){
        if(Usuario == listaUsu[i][0]&& Contra == listaUsu[i][1]){
            entrar = true;
        }
    }
    return entrar;
}