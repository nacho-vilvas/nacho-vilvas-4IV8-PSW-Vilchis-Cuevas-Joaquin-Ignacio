function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function interes(){
    var valor = document.formulario.cantidad.value;
    var valor2 = document.formulario.meses.value;
    var result = parseInt(valor);
    var mes = parseInt(valor2);
    var interes = (mes*result)*0.02;
    var total = result+interes;

    document.formulario.sueldoti.value = "$"+total;
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.meses.value = "";
    document.formulario.cantidad.value = "";
}